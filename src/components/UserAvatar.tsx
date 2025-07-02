import React from 'react';

interface UserAvatarProps {
  user: {
    full_name?: string;
    avatar_url?: string;
    user_metadata?: {
      full_name?: string;
      avatar_url?: string;
    };
    email?: string;
  };
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ user, size = 'md', className = '' }) => {
  const getUserInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const getUserAvatar = () => {
    return user?.avatar_url || user?.user_metadata?.avatar_url || null;
  };

  const getUserName = () => {
    return user?.full_name || user?.user_metadata?.full_name || user?.email || 'U';
  };

  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-12 h-12 text-sm',
    lg: 'w-16 h-16 text-xl',
    xl: 'w-20 h-20 text-2xl'
  };

  const avatarUrl = getUserAvatar();
  const userName = getUserName();
  const initials = getUserInitials(userName);

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      {avatarUrl ? (
        <img 
          src={avatarUrl} 
          alt={`${userName}'s profile`}
          className="w-full h-full rounded-full object-cover border-2 border-gray-200"
          onError={(e) => {
            console.error('Avatar image load error:', e);
            e.currentTarget.style.display = 'none';
            // Show fallback initials
            const fallback = e.currentTarget.nextElementSibling as HTMLElement;
            if (fallback) {
              fallback.style.display = 'flex';
            }
          }}
        />
      ) : null}
      <div 
        className={`w-full h-full bg-primary-400 text-white rounded-full flex items-center justify-center font-bold ${avatarUrl ? 'hidden' : 'flex'}`}
        style={{ display: avatarUrl ? 'none' : 'flex' }}
      >
        {initials}
      </div>
    </div>
  );
};

export default UserAvatar;