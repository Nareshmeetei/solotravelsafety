import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
  const keywordEnhancedLabel = (label: string) => {
    // Enhance common breadcrumb labels with SEO keywords
    switch (label.toLowerCase()) {
      case 'home':
        return 'Solo Female Travel Safety Home';
      case 'destinations':
        return 'Safe Solo Travel Destinations';
      case 'safety tips':
        return 'Solo Female Travel Safety Tips';
      case 'community':
        return 'Women Solo Travelers Community';
      case 'profile':
        return 'Solo Female Traveler Profile';
      case 'add destination':
        return 'Add Safe Solo Travel Destination';
      case 'account settings':
        return 'Solo Female Travel Account Settings';
      default:
        return label;
    }
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": keywordEnhancedLabel(item.label),
      ...(item.href && { "item": `https://solotravelsafety.com${item.href}` })
    }))
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd)
        }}
      />
      
      {/* Breadcrumb Navigation */}
      <nav className={`flex items-center space-x-2 text-sm ${className}`} aria-label="Breadcrumb navigation for solo female travel safety">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const enhancedLabel = keywordEnhancedLabel(item.label);
          
          return (
            <React.Fragment key={index}>
              {index > 0 && (
                <ChevronRight className="h-4 w-4 text-gray-400 flex-shrink-0" />
              )}
              
              {item.href && !isLast ? (
                <Link
                  to={item.href}
                  className="text-gray-600 hover:text-primary-400 transition-colors duration-300 hover:underline focus:outline-none focus:ring-2 focus:ring-primary-400 focus:rounded"
                  title={`Navigate to ${enhancedLabel}`}
                >
                  {index === 0 ? (
                    <span className="flex items-center">
                      <Home className="h-4 w-4 mr-1" />
                      {enhancedLabel}
                    </span>
                  ) : (
                    enhancedLabel
                  )}
                </Link>
              ) : (
                <span
                  className={`${
                    isLast 
                      ? 'text-gray-900 font-medium' 
                      : 'text-gray-600'
                  } flex items-center`}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {index === 0 && (
                    <Home className="h-4 w-4 mr-1" />
                  )}
                  {enhancedLabel}
                </span>
              )}
            </React.Fragment>
          );
        })}
      </nav>
    </>
  );
};

export default Breadcrumbs;