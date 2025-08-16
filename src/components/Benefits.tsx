import React from 'react';
import { MapPin, Flag, Users } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: MapPin,
      title: 'Know safe zones before you arrive',
      description: 'Insights from women who\'ve actually been there — not blogs written by dudes who haven\'t.',
      color: 'bg-primary-100 text-primary-600',
      bgColor: 'bg-primary-50',
    },
    {
      icon: Flag,
      title: 'Flag sketchy places for others',
      description: 'Scams, creeps, weird vibes? Our community flags them fast, so you don\'t walk in blind.',
      color: 'bg-primary-100 text-primary-600',
      bgColor: 'bg-primary-50',
    },
    {
      icon: Users,
      title: 'Real reviews by solo women travelers',
      description: 'No sugarcoating. No travel-bro takes. Just straight-up advice from women like you.',
      color: 'bg-secondary-teal-100 text-secondary-teal-600',
      bgColor: 'bg-secondary-teal-50',
    },
  ];

  return (
    <section className="bg-white px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-display text-gray-900 sm:text-4xl animate-fade-in-up">
            Why Solo Women Travelers Feel Safer Here
          </h2>
          <p className="text-lg text-gray-600 animate-fade-in-up animate-delay-200">
            Smart safety tips, real stories, and red flags from women who've actually been there.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`group card-hover rounded-2xl ${benefit.bgColor} p-8 shadow-sm ring-1 ring-gray-200 transition-all duration-500 animate-fade-in-up`}
              style={{ animationDelay: `${(index + 1) * 200}ms` }}
            >
              <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl ${benefit.color} transition-all duration-300`}>
                <benefit.icon className="h-6 w-6 transition-transform duration-300" />
              </div>
              <h3 className="mb-4 text-xl font-display text-gray-900 transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed transition-colors duration-300">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;