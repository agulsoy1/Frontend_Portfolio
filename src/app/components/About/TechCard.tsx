import { toolCategories } from "./aboutData";

export default function TechCard({ darkMode }: { darkMode: boolean }) {
  return (
    <div className="w-full flex gap-10 justify-evenly">
      {toolCategories.map(({ category, items, dark, light }, index) => {
        return (
          <div key={index} className=" flex flex-col gap-2 items-center">
            <h3>{category}</h3>
            <ul className="flex flex-wrap gap-2 flex-col">
              {items.map((item: string, index: number) => (
                <li
                  key={index}
                  className={`${darkMode ? dark : light} ${darkMode ? "text-white" : "text-black"} shadow-[5px_5px_15px_rgba(0,0,0,.5)] rounded-lg p-2`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
