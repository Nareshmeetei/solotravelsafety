import { useState, useEffect } from 'react'
import { supabase, isDevelopmentMode } from '../lib/supabase'

interface SessionInfo {
  isPersistent: boolean
  lastActivity: Date | null
  deviceInfo: string
  sessionAge: number | null
}

interface SessionStats {
  totalSessions: number
  activeSessions: number
  lastLoginTime: Date | null
}

export const useSessionManagement = () => {
  const [sessionInfo, setSessionInfo] = useState<SessionInfo>({
    isPersistent: false,
    lastActivity: new Date(),
    deviceInfo: 'Loading...',
    sessionAge: null
  })

  const [sessionStats, setSessionStats] = useState<SessionStats>({
    totalSessions: 1,
    activeSessions: 1,
    lastLoginTime: new Date()
  })

  // Update session info periodically
  useEffect(() => {
    const updateSessionInfo = () => {
      try {
        setSessionInfo(prev => ({
          ...prev,
          lastActivity: new Date(),
          sessionAge: getSessionAge(),
          isPersistent: checkIfSessionPersistent(),
          deviceInfo: prev.deviceInfo === 'Loading...' ? getBrowserInfo() : prev.deviceInfo
        }))
      } catch (error) {
        console.error('Error updating session info:', error)
        setSessionInfo(prev => ({
          ...prev,
          lastActivity: new Date(),
          deviceInfo: 'Unknown Device'
        }))
      }
    }

    // Initial update
    updateSessionInfo()
    
    // Update session info every minute
    const interval = setInterval(updateSessionInfo, 60000)

    return () => clearInterval(interval)
  }, [])

  const getSessionStatus = (): string => {
    if (isDevelopmentMode) {
      return 'Development Mode - Active Session'
    }

    const age = sessionInfo.sessionAge || 0
    if (age < 30) {
      return 'Active - Just started'
    } else if (age < 120) {
      return `Active - ${age} minutes`
    } else {
      const hours = Math.floor(age / 60)
      return `Active - ${hours} hour${hours > 1 ? 's' : ''}`
    }
  }

  const getSessionStats = (): SessionStats => {
    return sessionStats
  }

  const forceLogoutFromAllSessions = async (): Promise<{ success: boolean; message?: string }> => {
    try {
      if (isDevelopmentMode) {
        console.log('🚧 Development mode: Simulating logout from all sessions')
        return {
          success: true,
          message: 'Successfully logged out from all sessions (development mode)'
        }
      }

      // Sign out from current session
      const { error } = await supabase.auth.signOut()
      
      if (error) {
        console.error('Error during logout:', error)
        return {
          success: false,
          message: `Failed to logout: ${error.message}`
        }
      }

      return {
        success: true,
        message: 'Successfully logged out from all sessions'
      }
    } catch (error: any) {
      console.error('Error in forceLogoutFromAllSessions:', error)
      return {
        success: false,
        message: `Logout failed: ${error.message || 'Unknown error'}`
      }
    }
  }

  const refreshSession = async () => {
    try {
      if (isDevelopmentMode) {
        console.log('🚧 Development mode: Simulating session refresh')
        return true
      }

      const { data, error } = await supabase.auth.refreshSession()
      
      if (error) {
        console.error('Session refresh error:', error)
        return false
      }

      return !!data.session
    } catch (error) {
      console.error('Error refreshing session:', error)
      return false
    }
  }

  const isSessionExpiringSoon = (): boolean => {
    if (isDevelopmentMode) {
      return false
    }

    // Check if session expires within next 5 minutes
    const age = sessionInfo.sessionAge || 0
    return age > 115 // Session typically expires after 120 minutes
  }

  const extendSession = async () => {
    console.log('🚧 extendSession placeholder')
    return await refreshSession()
  }

  const endSession = async () => {
    console.log('🚧 endSession placeholder')
    const result = await forceLogoutFromAllSessions()
    return result.success
  }

  return {
    sessionInfo,
    sessionStats,
    getSessionStatus,
    getSessionStats,
    forceLogoutFromAllSessions,
    refreshSession,
    isSessionExpiringSoon,
    extendSession,
    endSession
  }
}

// Helper functions
function getBrowserInfo(): string {
  try {
    if (typeof navigator === 'undefined' || !navigator.userAgent) {
      return 'Unknown Device'
    }
    
    const ua = navigator.userAgent
    let browser = 'Unknown Browser'
    let os = 'Unknown OS'

    // Detect browser
    if (ua.includes('Chrome') && !ua.includes('Edg')) {
      browser = 'Chrome'
    } else if (ua.includes('Firefox')) {
      browser = 'Firefox'
    } else if (ua.includes('Safari') && !ua.includes('Chrome')) {
      browser = 'Safari'
    } else if (ua.includes('Edg')) {
      browser = 'Edge'
    }

    // Detect OS
    if (ua.includes('Windows')) {
      os = 'Windows'
    } else if (ua.includes('Mac')) {
      os = 'macOS'
    } else if (ua.includes('Linux')) {
      os = 'Linux'
    } else if (ua.includes('Android')) {
      os = 'Android'
    } else if (ua.includes('iOS')) {
      os = 'iOS'
    }

    return `${browser} on ${os}`
  } catch (error) {
    console.error('Error detecting browser info:', error)
    return 'Unknown Device'
  }
}

function getSessionAge(): number {
  try {
    if (typeof localStorage === 'undefined') {
      return 0
    }
    
    // Get session start time from localStorage or estimate
    const sessionStart = localStorage.getItem('sts-session-start')
    if (sessionStart) {
      const startTime = new Date(sessionStart)
      const now = new Date()
      return Math.floor((now.getTime() - startTime.getTime()) / (1000 * 60)) // minutes
    } else {
      // Set session start time if not exists
      const now = new Date()
      localStorage.setItem('sts-session-start', now.toISOString())
      return 0
    }
  } catch (error) {
    console.error('Error calculating session age:', error)
    return 0
  }
}

function checkIfSessionPersistent(): boolean {
  try {
    if (typeof localStorage === 'undefined') {
      return false
    }
    // Check if session is persistent (stored in localStorage vs sessionStorage)
    return !!localStorage.getItem('sts-auth-token')
  } catch (error) {
    console.error('Error checking session persistence:', error)
    return false
  }
}