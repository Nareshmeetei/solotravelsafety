import { useEffect, useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { supabase } from '../lib/supabase'

interface SessionInfo {
  isPersistent: boolean
  lastActivity: Date | null
  deviceInfo: string
  sessionAge: number | null
}

export const useSessionManagement = () => {
  const { user, session, isSessionPersistent } = useAuth()
  const [sessionInfo, setSessionInfo] = useState<SessionInfo>({
    isPersistent: false,
    lastActivity: null,
    deviceInfo: '',
    sessionAge: null
  })

  // Track user activity for session management
  useEffect(() => {
    if (!user) return

    const updateLastActivity = () => {
      setSessionInfo(prev => ({
        ...prev,
        lastActivity: new Date()
      }))
    }

    // Update activity on user interactions
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click']
    events.forEach(event => {
      document.addEventListener(event, updateLastActivity, { passive: true })
    })

    // Set initial activity
    updateLastActivity()

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, updateLastActivity)
      })
    }
  }, [user])

  // Calculate session age
  useEffect(() => {
    if (session?.access_token) {
      // Use current time as session start since we don't have exact creation time
      // In a real app, you'd store session creation time in your database
      const now = new Date()
      const ageInMinutes = 0 // For now, we'll set this to 0 since we don't track exact start time
      
      setSessionInfo(prev => ({
        ...prev,
        sessionAge: ageInMinutes
      }))
    }
  }, [session])

  // Get device information
  useEffect(() => {
    const deviceInfo = `${navigator.platform} - ${navigator.userAgent.split(' ').pop()}`
    setSessionInfo(prev => ({
      ...prev,
      deviceInfo,
      isPersistent: isSessionPersistent
    }))
  }, [isSessionPersistent])

  // Check for unusual activity (basic implementation)
  const checkForUnusualActivity = () => {
    if (!sessionInfo.lastActivity) return false
    
    const now = new Date()
    const timeSinceLastActivity = now.getTime() - sessionInfo.lastActivity.getTime()
    const hoursSinceLastActivity = timeSinceLastActivity / (1000 * 60 * 60)
    
    // Consider unusual if no activity for more than 24 hours
    return hoursSinceLastActivity > 24
  }

  // Get session status message
  const getSessionStatus = () => {
    if (!user) return 'Not signed in'
    
    if (sessionInfo.isPersistent) {
      return 'Signed in (persistent session)'
    } else {
      return 'Signed in (session only)'
    }
  }

  // Force logout from all sessions (for security)
  const forceLogoutFromAllSessions = async () => {
    try {
      // This would typically call a backend endpoint to invalidate all sessions
      // For now, we'll just sign out the current session
      await supabase.auth.signOut()
      return { success: true }
    } catch (error) {
      console.error('Error forcing logout from all sessions:', error)
      return { success: false, error }
    }
  }

  // Get session statistics
  const getSessionStats = () => {
    if (!session) return null

    return {
      sessionAge: sessionInfo.sessionAge,
      isPersistent: sessionInfo.isPersistent,
      deviceInfo: sessionInfo.deviceInfo,
      lastActivity: sessionInfo.lastActivity,
      unusualActivity: checkForUnusualActivity()
    }
  }

  return {
    sessionInfo,
    checkForUnusualActivity,
    getSessionStatus,
    forceLogoutFromAllSessions,
    getSessionStats
  }
} 