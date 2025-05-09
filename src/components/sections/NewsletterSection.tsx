
import { Button } from "@/components/ui/button";

const NewsletterSection = () => {
  return (
    <section className="py-10 bg-[#9b87f5] text-white">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="text-center lg:text-left mb-6 lg:mb-0">
            <h3 className="text-2xl font-bold mb-2">Подпишитесь на наши новости</h3>
            <p>Получайте первыми информацию о скидках и новых товарах</p>
          </div>
          <div className="flex w-full max-w-md gap-2">
            <input
              type="email"
              placeholder="Введите ваш Email"
              className="flex-1 rounded-md px-4 py-2 text-black"
            />
            <Button className="bg-white text-[#9b87f5] hover:bg-gray-100">
              Подписаться
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
