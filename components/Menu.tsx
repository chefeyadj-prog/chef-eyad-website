import React from 'react';
import type { MenuCategory, MenuItem as MenuItemType } from '../types';

interface MenuProps {
  content: {
    title: string;
    categories: MenuCategory[];
    allergens: {
      title: string;
      content: string;
      list_title?: string;
      list?: string[];
      calorieGuide?: {
        title: string;
        categories: CalorieGuideCategory[];
      };
      exerciseGuide?: ExerciseGuide;
    };
  };
}
const allergenIcons: Record<Allergen, { icon: React.ReactNode; label: string }> = {
  gluten: {
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.78,9.45a1,1,0,0,0-1.1-1.32,10.66,10.66,0,0,1-2.29-.19,1,1,0,0,0-1.12.83,2.44,2.44,0,0,1-4.54,0,1,1,0,0,0-1.12-.83,10.66,10.66,0,0,1-2.29.19,1,1,0,0,0-1.1,1.32,11.5,11.5,0,0,0,5.49,11.2,1,1,0,0,0,1,0A11.5,11.5,0,0,0,19.78,9.45Z"/></svg>,
    label: 'Contains Gluten'
  },
  dairy: {
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12,2A10,10,0,0,0,5.22,18.14c1.45,1.72,3.77,3.58,6.2,3.82a1,1,0,0,0,.64,0c2.43-.24,4.75-2.1,6.2-3.82A10,10,0,0,0,12,2Zm0,18a8,8,0,0,1-5.55-2.25c.55-.63,1.22-1.37,1.78-2,.6-.68,1.2-1.28,1.67-1.63A4,4,0,0,0,12,11.5a4,4,0,0,0,2.1-3.38c.47.35,1.07.95,1.67,1.63.56.63,1.23,1.37,1.78,2A8,8,0,0,1,12,20Z"/></svg>,
    label: 'Contains Dairy'
  },
  nuts: {
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.5,10H17.21l-3.54,4.25,2.1,2.1a1,1,0,0,1,0,1.42,1,1,0,0,1-1.42,0l-2.1-2.1L8.5,19.92a1,1,0,0,1-1.42,0,1,1,0,0,1,0-1.42l2.1-2.1L4.79,10H2.5A2.5,2.5,0,0,1,0,7.5,2.5,2.5,0,0,1,2.5,5h19A2.5,2.5,0,0,1,24,7.5,2.5,2.5,0,0,1,21.5,10Z"/></svg>,
    label: 'Contains Nuts'
  }
};
const MenuItem: React.FC<MenuItemType> = ({ name, description, price, image }) => {
  if (image) {
    return (
      <div className="bg-slate-800/50 rounded-lg overflow-hidden flex flex-col shadow-lg h-full">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <div className="p-4 flex flex-col flex-grow">
          <div className="flex justify-between items-baseline">
            <h4 className="text-xl font-bold text-white">{name}</h4>
            {price && <p className="text-xl font-semibold text-amber-500 flex-shrink-0 ms-4">{price}</p>}
          </div>
          <p className="text-slate-400 mt-1 flex-grow whitespace-pre-line">{description}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-4">
      <div className="flex justify-between items-baseline">
        <h4 className="text-xl font-bold text-white">{name}</h4>
        {price && <p className="text-xl font-semibold text-amber-500 flex-shrink-0 ms-4">{price}</p>}
      </div>
      <p className="text-slate-400 mt-1 whitespace-pre-line">{description}</p>
    </div>
  );
};

const Menu: React.FC<MenuProps> = ({ content }) => {
  return (
    <section id="menu" className="py-20 bg-slate-950">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold font-display text-center mb-12 text-white">
          {content.title}
        </h2>
        <div className="max-w-6xl mx-auto">
          {content.categories.map((category, index) => {
            const hasImages = category.items.some(item => item.image);
            const gridCols = hasImages 
              ? 'sm:grid-cols-2 lg:grid-cols-3 gap-8' 
              : 'md:grid-cols-2 gap-x-8';

            return (
              <div key={index} className="mb-16">
                <h3 className="text-3xl font-display font-bold text-amber-500 mb-2 text-center">{category.title}</h3>
                {category.description && (
                  <p className="text-center text-slate-300 mb-8 whitespace-pre-line max-w-4xl mx-auto">{category.description}</p>
                )}
                <div className={`grid grid-cols-1 ${gridCols}`}>
                  {category.items.map((item, itemIndex) => (
                    <MenuItem key={itemIndex} {...item} />
                  ))}
                </div>
                 {category.note && (
                  <p className="text-center text-slate-400 mt-10 whitespace-pre-line border-t border-slate-800 pt-6 max-w-4xl mx-auto">{category.note}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Menu;
