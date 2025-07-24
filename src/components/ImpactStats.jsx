// src/components/ImpactStats.jsx
import React from 'react';
import { Users, Headphones, MessageCircle, Globe } from 'lucide-react';

const ImpactStats = () => {
  const stats = [
    { icon: <Users size={24} />, value: "5,200+", label: "Patients couverts" },
    { icon: <Headphones size={24} />, value: "12,500+", label: "Écoutes de contenu" },
    { icon: <MessageCircle size={24} />, value: "890+", label: "Questions répondues" },
    { icon: <Globe size={24} />, value: "78%", label: "Couverture rurale" },
  ];

  return (
    <div className="py-12 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Impact de SanbaCare</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white bg-opacity-10 p-6 rounded-xl text-center backdrop-blur-sm">
              <div className="flex justify-center mb-4">
                <div className="bg-white bg-opacity-20 p-3 rounded-full">
                  {stat.icon}
                </div>
              </div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg max-w-3xl mx-auto">
            "SanbaCare a révolutionné l'accès aux soins dans les régions rurales du Burkina Faso, 
            réduisant les délais d'attente de 40% et augmentant la prévention des maladies de 65%."
          </p>
          <p className="mt-4 font-medium">- Ministère de la Santé du Burkina Faso</p>
        </div>
      </div>
    </div>
  );
};

export default ImpactStats;