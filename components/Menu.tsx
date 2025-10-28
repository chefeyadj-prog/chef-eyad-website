import React from 'react';

// أنواع البيانات المستخدمة
export type Allergen = 'gluten' | 'dairy' | 'nuts';

export interface MenuItem {
  name: string;
  description: string;
  price?: string;
  image?: string;
  allergens?: Allergen[];
}

export interface MenuCategory {
  title: string;
  description?: string;
  note?: string;
  items: MenuItem[];
}

export interface CalorieGuideCategory {
  name: string;
  men: number;
  women: number;
  children: number;
}

export interface ExerciseGuide {
  title: string;
  exercises: {
    name: string;
    caloriesBurned: string;
  }[];
}

interface MenuProps {
  content: {
    title: string;
    categories: MenuCategory[];
    allergens?: {
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

// أيقونات الحساسية
const allergenIcons: Record<Allergen, { icon: React.ReactNode; label: string }> = {
  gluten: {
    icon: <span>🌾</span>,
    label: 'Contains Gluten',
  },
  dairy: {
    icon: <span>🥛</span>,
    label: 'Contains Dairy',
  },
  nuts: {
    icon: <span>🥜</span>,
    label: 'Contains Nuts',
  },
};

// مكون عرض صنف القائمة
const MenuItemComponent: React.FC<MenuItem> = ({ name, description, price, image, allergens }) => {
  return (
    <div className="bg-slate-800/50 rounded-xl overflow-hidden shadow-lg flex flex-col h-full">
      {image && <img src={image} alt={name} className="w-full h-48 object-cover" />}
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-baseline">
          <h4 className="text-xl font-bold text-white">{name}</h4>
          {price && <p className="text-lg font-semibold text-amber-500">{price}</p>}
        </div>
        <p className="text-slate-400 mt-2 whitespace-pre-line flex-grow">{description}</p>

        {/* أيقونات الحساسية */}
        {allergens && allergens.length > 0 && (
          <div className="flex gap-3 mt-3">
            {allergens.map((a) => (
              <div key={a} title={allergenIcons[a].label} className="text-slate-300">
                {allergenIcons[a].icon}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// مكون القائمة الرئيسية
const Menu: React.FC<MenuProps> = ({ content }) => {
  return (
    <section id="menu" className="py-20 bg-slate-950 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-amber-500">
          {content.title}
        </h2>

        {/* التصنيفات */}
        <div className="max-w-6xl mx-auto">
          {content.categories.map((category, i) => {
            const hasImages = category.items.some(item => item.image);
            const gridCols = hasImages ? 'sm:grid-cols-2 lg:grid-cols-3 gap-8' : 'md:grid-cols-2 gap-x-8';

            return (
              <div key={i} className="mb-16">
                <h3 className="text-3xl font-display font-bold text-amber-400 mb-4 text-center">
                  {category.title}
                </h3>
                {category.description && (
                  <p className="text-center text-slate-300 mb-8 whitespace-pre-line max-w-4xl mx-auto">
                    {category.description}
                  </p>
                )}
                <div className={`grid grid-cols-1 ${gridCols}`}>
                  {category.items.map((item, j) => (
                    <MenuItemComponent key={j} {...item} />
                  ))}
                </div>
                {category.note && (
                  <p className="text-center text-slate-400 mt-8 border-t border-slate-800 pt-6 max-w-3xl mx-auto whitespace-pre-line">
                    {category.note}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* قسم مسببات الحساسية والمعلومات الإضافية */}
        {content.allergens && (
          <div className="mt-20 border-t border-slate-800 pt-10 max-w-4xl mx-auto text-center">
            <h3 className="text-3xl text-amber-400 mb-4">{content.allergens.title}</h3>
            <p className="text-slate-300 mb-6">{content.allergens.content}</p>

            {content.allergens.list && (
              <>
                <h4 className="text-xl text-amber-500 mb-2">{content.allergens.list_title}</h4>
                <ul className="text-slate-400 space-y-1">
                  {content.allergens.list.map((a, i) => <li key={i}>{a}</li>)}
                </ul>
              </>
            )}

            {/* دليل السعرات */}
            {content.allergens.calorieGuide && (
              <div className="mt-10">
                <h4 className="text-xl text-amber-500 mb-3">{content.allergens.calorieGuide.title}</h4>
                <table className="mx-auto border border-slate-700">
                  <thead>
                    <tr className="bg-slate-800 text-amber-400">
                      <th className="px-4 py-2">الفئة</th>
                      <th className="px-4 py-2">الرجال</th>
                      <th className="px-4 py-2">النساء</th>
                      <th className="px-4 py-2">الأطفال</th>
                    </tr>
                  </thead>
                  <tbody>
                    {content.allergens.calorieGuide.categories.map((row, i) => (
                      <tr key={i} className="border-t border-slate-700">
                        <td className="px-4 py-2">{row.name}</td>
                        <td className="px-4 py-2">{row.men}</td>
                        <td className="px-4 py-2">{row.women}</td>
                        <td className="px-4 py-2">{row.children}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* دليل الرياضة */}
            {content.allergens.exerciseGuide && (
              <div className="mt-10">
                <h4 className="text-xl text-amber-500 mb-3">{content.allergens.exerciseGuide.title}</h4>
                <ul className="text-slate-400 space-y-1">
                  {content.allergens.exerciseGuide.exercises.map((ex, i) => (
                    <li key={i}>{ex.name} — {ex.caloriesBurned}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Menu;
