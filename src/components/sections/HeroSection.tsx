
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative py-12 lg:py-24 bg-gradient-to-r from-[#FDE1D3] to-[#E5DEFF]">
      <div className="container flex flex-col lg:flex-row items-center gap-8">
        <div className="max-w-2xl space-y-6 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Всё для счастливого детства <br />и комфортного материнства
          </h1>
          <p className="text-lg lg:text-xl text-foreground/80">
            Товары премиум качества для ваших малышей и будущих мам.<br />
            Бесплатная доставка по Москве от 3000₽.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button className="bg-[#9b87f5] hover:bg-[#8470e9] text-white">
              Смотреть каталог
            </Button>
            <Button variant="outline">
              Специальные предложения
            </Button>
          </div>
        </div>
        <div className="relative w-full lg:w-1/2 h-[400px] rounded-md overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1491013516836-7db643ee125a?q=80&w=2825&auto=format&fit=crop"
            alt="Счастливая семья с ребенком"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
