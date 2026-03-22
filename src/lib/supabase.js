import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

export function getSessionId() {
  let sessionId = localStorage.getItem('espacio_semillas_session_id_g8')
  if (!sessionId) {
    sessionId = crypto.randomUUID()
    localStorage.setItem('espacio_semillas_session_id_g8', sessionId)
  }
  return sessionId
}

export async function recordVisit(sectionName) {
  if (!supabase) {
    const visits = JSON.parse(localStorage.getItem('visited_sections_g8') || '[]')
    if (!visits.includes(sectionName)) {
      visits.push(sectionName)
      localStorage.setItem('visited_sections_g8', JSON.stringify(visits))
    }
    return
  }
  
  try {
    const sessionId = getSessionId()
    await supabase.from('student_progress').insert({
      session_id: sessionId,
      section_visited: `g8_${sectionName}`,
      visited_at: new Date().toISOString()
    })
  } catch (error) {
    console.warn('Supabase error:', error.message)
    const visits = JSON.parse(localStorage.getItem('visited_sections_g8') || '[]')
    if (!visits.includes(sectionName)) {
      visits.push(sectionName)
      localStorage.setItem('visited_sections_g8', JSON.stringify(visits))
    }
  }
}

export async function removeVisit(sectionName) {
  if (!supabase) {
    const visits = JSON.parse(localStorage.getItem('visited_sections_g8') || '[]')
    localStorage.setItem('visited_sections_g8', JSON.stringify(visits.filter(v => v !== sectionName)))
    return
  }

  try {
    const sessionId = getSessionId()
    await supabase.from('student_progress').delete()
      .eq('session_id', sessionId)
      .eq('section_visited', `g8_${sectionName}`)
  } catch (error) {
    console.warn('Supabase error:', error.message)
    const visits = JSON.parse(localStorage.getItem('visited_sections_g8') || '[]')
    localStorage.setItem('visited_sections_g8', JSON.stringify(visits.filter(v => v !== sectionName)))
  }
}

export async function getVisitedSections() {
  if (!supabase) {
    return JSON.parse(localStorage.getItem('visited_sections_g8') || '[]')
  }

  try {
    const sessionId = getSessionId()
    const { data, error } = await supabase
      .from('student_progress')
      .select('section_visited')
      .eq('session_id', sessionId)
      .like('section_visited', 'g8_%')
    
    if (error) throw error
    return [...new Set(data.map(d => d.section_visited.replace('g8_', '')))]
  } catch (error) {
    return JSON.parse(localStorage.getItem('visited_sections_g8') || '[]')
  }
}
