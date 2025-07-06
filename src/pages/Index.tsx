import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-automotive-blue-dark via-automotive-blue to-automotive-blue-light">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 container mx-auto px-4 py-20 text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge
                  variant="outline"
                  className="bg-automotive-electric/20 text-automotive-electric border-automotive-electric"
                >
                  БЕСПЛАТНАЯ ДИАГНОСТИКА
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-automotive-electric">BSPOT</span>
                  <br />
                  Профессиональная диагностика аккумулятора
                </h1>
                <p className="text-xl text-gray-200 max-w-lg">
                  Новые аккумуляторы и профессиональная диагностика авто в одном
                  месте!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-automotive-electric hover:bg-automotive-electric/90 text-white px-8 py-4 text-lg"
                >
                  <Icon name="Battery" className="mr-2" />
                  Заказать аккумулятор
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg"
                >
                  <Icon name="Phone" className="mr-2" />
                  (812) 467-95-59
                </Button>
              </div>

              <div className="flex items-center gap-6 text-sm">
                <a
                  href="https://t.me/BSpot24"
                  className="flex items-center gap-2 hover:text-automotive-electric transition-colors"
                >
                  <Icon name="MessageCircle" size={20} />
                  Telegram
                </a>
                <span className="w-px h-6 bg-white/30"></span>
                <span className="text-gray-300">Доставка 24/7 по СПб и ЛО</span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-automotive-blue to-automotive-electric opacity-20 rounded-3xl blur-3xl"></div>
              <img
                src="/img/b8dc7899-2c80-4e8a-8dee-7032559c3784.jpg"
                alt="Автомобильный аккумулятор"
                className="relative z-10 rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-automotive-gray mb-4">
              О компании BSPOT
            </h2>
            <p className="text-xl text-automotive-gray-light max-w-3xl mx-auto">
              Мы специализируемся на диагностике, продаже и установке
              автомобильных аккумуляторов. Наша команда профессионалов готова
              решить любые проблемы с электрооборудованием вашего автомобиля.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon
                  name="Award"
                  className="mx-auto mb-4 text-automotive-electric"
                  size={48}
                />
                <CardTitle className="text-automotive-gray">
                  Гарантия качества
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-automotive-gray-light">
                  Гарантия на аккумуляторы до 48 месяцев. Все работы выполняются
                  с соблюдением стандартов качества.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon
                  name="Clock"
                  className="mx-auto mb-4 text-automotive-electric"
                  size={48}
                />
                <CardTitle className="text-automotive-gray">
                  Быстрая доставка
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-automotive-gray-light">
                  Доставка и установка аккумулятора от 2 часов по СПб и
                  Ленинградской области.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon
                  name="Users"
                  className="mx-auto mb-4 text-automotive-electric"
                  size={48}
                />
                <CardTitle className="text-automotive-gray">
                  Опытные мастера
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-automotive-gray-light">
                  Наши специалисты имеют многолетний опыт работы с автомобилями
                  всех марок и моделей.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-automotive-gray mb-4">
              Услуги и цены
            </h2>
            <p className="text-xl text-automotive-gray-light">
              Доставка и установка авто аккумулятора от 2 часов в СПб и ЛО
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "Settings",
                title: "Прописка аккумулятора",
                description:
                  "Прописываем новый аккумулятор в системе авто и производим сброс ошибок",
              },
              {
                icon: "Search",
                title: "Поиск утечки тока",
                description:
                  "Профессиональная диагностика и поиск утечки тока в автомобиле",
              },
              {
                icon: "Unlock",
                title: "Вскрытие замков",
                description:
                  "Откроем заблокированные двери, капот или багажник автомобиля",
              },
              {
                icon: "RefreshCw",
                title: "Восстановление аккумулятора",
                description:
                  "Восстановим, обслужим и зарядим автомобильный аккумулятор",
              },
              {
                icon: "Zap",
                title: "Прикуривание авто",
                description: "Быстрая помощь при разряженном аккумуляторе",
              },
              {
                icon: "Computer",
                title: "Компьютерная диагностика",
                description:
                  "Запуск и полная компьютерная диагностика автомобиля",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow bg-white border-l-4 border-automotive-electric"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <Icon
                      name={service.icon}
                      className="text-automotive-electric"
                      size={24}
                    />
                    <CardTitle className="text-automotive-gray text-lg">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-automotive-gray-light text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-automotive-gray mb-4">
                Оставить заявку
              </h2>
              <p className="text-xl text-automotive-gray-light">
                Заполните форму и мы свяжемся с вами в течение 15 минут
              </p>
            </div>

            <Card className="shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-automotive-gray">
                  Бесплатная консультация
                </CardTitle>
                <CardDescription>
                  Получите профессиональную консультацию по подбору и установке
                  аккумулятора
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Номер телефона</Label>
                  <Input id="phone" placeholder="+7 (999) 123-45-67" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="car">Марка и модель автомобиля</Label>
                  <Input
                    id="car"
                    placeholder="BMW X5, Mercedes C-Class, Toyota Camry..."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Описание проблемы</Label>
                  <Textarea
                    id="message"
                    placeholder="Опишите проблему с аккумулятором или какие услуги вас интересуют..."
                    rows={4}
                  />
                </div>

                <Button className="w-full bg-automotive-electric hover:bg-automotive-electric/90 text-white py-3 text-lg">
                  <Icon name="Send" className="mr-2" />
                  Отправить заявку
                </Button>

                <p className="text-sm text-automotive-gray-light text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных
                  данных
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Car Brands */}
      <section className="py-20 bg-gradient-to-br from-automotive-gray-dark to-automotive-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Работаем с автомобилями всех марок
            </h2>
            <p className="text-xl text-gray-300">
              Аккумуляторы и установка на авто всех марок
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-6">
            {[
              "BMW",
              "Mercedes",
              "Audi",
              "VW",
              "Geely",
              "Haval",
              "Hyundai",
              "Toyota",
            ].map((brand) => (
              <div key={brand} className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors">
                  <Icon
                    name="Car"
                    className="mx-auto text-white mb-2"
                    size={32}
                  />
                  <span className="text-white font-medium text-sm">
                    {brand}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-automotive-gray-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-automotive-electric mb-4">
                BSPOT
              </h3>
              <p className="text-gray-300 mb-4">
                Профессиональная диагностика и установка автомобильных
                аккумуляторов в Санкт-Петербурге
              </p>
              <div className="flex gap-4">
                <a
                  href="https://t.me/BSpot24"
                  className="hover:text-automotive-electric transition-colors"
                >
                  <Icon name="MessageCircle" size={24} />
                </a>
                <a
                  href="#"
                  className="hover:text-automotive-electric transition-colors"
                >
                  <Icon name="Globe" size={24} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>(812) 467-95-59</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MessageCircle" size={16} />
                  <span>t.me/BSpot24</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>Санкт-Петербург и ЛО</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Режим работы</h4>
              <div className="space-y-2 text-gray-300">
                <p>Пн-Вс: 24/7</p>
                <p>Экстренная помощь</p>
                <p>Доставка от 2 часов</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BSPOT. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
