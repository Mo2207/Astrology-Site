
interface CardProps {
  title: string;
  items:string[];
}

export default function CourseCard({ title, items }: CardProps) {
  return (
    <div className="flex justify-center w-[80%] h-[100%] p-6 rounded-lg bg-[#FFFFFF] text-gray-900 transition-transform duration-300 ease-in-out hover:scale-110 shadow-lg">
          <div className="flex flex-col items-center w-full">
            <h2 className="font-bold pb-6 text-center text-4xl">{title}</h2>
            <div className="flex flex-col items-center text-center font-semibold text-gray-600 text-lg space-y-3">
              {items.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
        </div>
  )
}