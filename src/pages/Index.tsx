import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Rocket" size={28} className="text-startup-blue" />
              <span className="text-xl font-inter font-bold text-startup-gray">InnoTech</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-startup-gray hover:text-startup-blue transition-colors font-open-sans">Главная</a>
              <a href="#about" className="text-startup-gray hover:text-startup-blue transition-colors font-open-sans">О нас</a>
              <a href="#team" className="text-startup-gray hover:text-startup-blue transition-colors font-open-sans">Команда</a>
              <a href="#products" className="text-startup-gray hover:text-startup-blue transition-colors font-open-sans">Продукты</a>
              <a href="#contact" className="text-startup-gray hover:text-startup-blue transition-colors font-open-sans">Контакты</a>
            </div>
            <Button className="bg-startup-blue hover:bg-blue-700 text-white font-open-sans">
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 bg-gradient-to-br from-startup-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-inter font-bold text-startup-gray mb-6">
              Инновации в
              <span className="text-startup-blue"> IT</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto font-open-sans">
              Мы создаем технологии будущего уже сегодня. Наша команда разрабатывает 
              передовые решения для цифровой трансформации бизнеса.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-startup-blue hover:bg-blue-700 text-white font-open-sans px-8">
                <Icon name="ArrowRight" size={20} className="ml-2" />
                Узнать больше
              </Button>
              <Button size="lg" variant="outline" className="border-startup-blue text-startup-blue hover:bg-startup-blue hover:text-white font-open-sans px-8">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть демо
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-inter font-bold text-startup-gray mb-4">О нашей компании</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-open-sans">
              Мы — команда профессионалов, объединенных общей целью создавать продукты, 
              которые меняют мир к лучшему.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow animate-scale-in">
              <CardHeader>
                <Icon name="Target" size={48} className="text-startup-blue mx-auto mb-4" />
                <CardTitle className="font-inter text-startup-gray">Наша миссия</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-open-sans">
                  Democratizing technology and making innovation accessible to businesses of all sizes
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow animate-scale-in">
              <CardHeader>
                <Icon name="Eye" size={48} className="text-startup-blue mx-auto mb-4" />
                <CardTitle className="font-inter text-startup-gray">Наше видение</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-open-sans">
                  Стать лидирующей IT-компанией, определяющей стандарты технологического развития
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow animate-scale-in">
              <CardHeader>
                <Icon name="Heart" size={48} className="text-startup-blue mx-auto mb-4" />
                <CardTitle className="font-inter text-startup-gray">Наши ценности</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-open-sans">
                  Инновации, качество, клиентоориентированность и постоянное развитие
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-startup-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-inter font-bold text-startup-gray mb-4">Наша команда</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-open-sans">
              Знакомьтесь с профессионалами, которые воплощают наши идеи в жизнь
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow animate-scale-in">
              <CardHeader>
                <img 
                  src="/img/b342e0bc-329b-4fdf-8d4b-571a3d615f79.jpg" 
                  alt="Алексей Иванов" 
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <CardTitle className="font-inter text-startup-gray">Алексей Иванов</CardTitle>
                <CardDescription className="text-startup-blue font-open-sans">CEO & Founder</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-open-sans">
                  Опыт в IT более 15 лет. Ранее работал в крупных технологических компаниях.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow animate-scale-in">
              <CardHeader>
                <img 
                  src="/img/dffff0ec-0731-494c-a7c4-556285974042.jpg" 
                  alt="Мария Петрова" 
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <CardTitle className="font-inter text-startup-gray">Мария Петрова</CardTitle>
                <CardDescription className="text-startup-blue font-open-sans">CTO</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-open-sans">
                  Ведущий архитектор решений с экспертизой в облачных технологиях и AI.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow animate-scale-in">
              <CardHeader>
                <img 
                  src="/img/e8df6990-5b3c-4432-a51d-a3d77bb3c955.jpg" 
                  alt="Дмитрий Сидоров" 
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <CardTitle className="font-inter text-startup-gray">Дмитрий Сидоров</CardTitle>
                <CardDescription className="text-startup-blue font-open-sans">Lead Developer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-open-sans">
                  Full-stack разработчик, специалист по современным веб-технологиям.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-inter font-bold text-startup-gray mb-4">Наши продукты</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-open-sans">
              Инновационные решения для различных отраслей бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow animate-scale-in">
              <CardHeader>
                <Icon name="Cloud" size={48} className="text-startup-blue mb-4" />
                <CardTitle className="font-inter text-startup-gray">CloudSync Pro</CardTitle>
                <CardDescription className="font-open-sans">
                  Платформа для синхронизации данных в облаке
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-open-sans mb-4">
                  Безопасное хранение и синхронизация корпоративных данных с передовыми алгоритмами шифрования.
                </p>
                <Button className="w-full bg-startup-blue hover:bg-blue-700 text-white font-open-sans">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow animate-scale-in">
              <CardHeader>
                <Icon name="Brain" size={48} className="text-startup-blue mb-4" />
                <CardTitle className="font-inter text-startup-gray">AI Analytics</CardTitle>
                <CardDescription className="font-open-sans">
                  Система аналитики на базе искусственного интеллекта
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-open-sans mb-4">
                  Продвинутая аналитика бизнес-процессов с предиктивными моделями и автоматизацией.
                </p>
                <Button className="w-full bg-startup-blue hover:bg-blue-700 text-white font-open-sans">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow animate-scale-in">
              <CardHeader>
                <Icon name="Smartphone" size={48} className="text-startup-blue mb-4" />
                <CardTitle className="font-inter text-startup-gray">MobileFirst</CardTitle>
                <CardDescription className="font-open-sans">
                  Платформа для разработки мобильных приложений
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-open-sans mb-4">
                  No-code решение для создания нативных мобильных приложений за считанные дни.
                </p>
                <Button className="w-full bg-startup-blue hover:bg-blue-700 text-white font-open-sans">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-startup-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-inter font-bold text-startup-gray mb-4">Свяжитесь с нами</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-open-sans">
              Готовы обсудить ваш проект? Мы всегда открыты для новых возможностей
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Icon name="MapPin" size={24} className="text-startup-blue mt-1" />
                <div>
                  <h3 className="font-inter font-semibold text-startup-gray mb-2">Адрес</h3>
                  <p className="text-gray-600 font-open-sans">
                    г. Москва, ул. Тверская, д. 1<br />
                    БЦ "Технопарк", офис 42
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Icon name="Phone" size={24} className="text-startup-blue mt-1" />
                <div>
                  <h3 className="font-inter font-semibold text-startup-gray mb-2">Телефон</h3>
                  <p className="text-gray-600 font-open-sans">+7 (495) 123-45-67</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Icon name="Mail" size={24} className="text-startup-blue mt-1" />
                <div>
                  <h3 className="font-inter font-semibold text-startup-gray mb-2">Email</h3>
                  <p className="text-gray-600 font-open-sans">hello@innotech.ru</p>
                </div>
              </div>
            </div>

            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle className="font-inter text-startup-gray">Отправить сообщение</CardTitle>
                <CardDescription className="font-open-sans">
                  Заполните форму, и мы свяжемся с вами в ближайшее время
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Имя" className="font-open-sans" />
                  <Input placeholder="Фамилия" className="font-open-sans" />
                </div>
                <Input type="email" placeholder="Email" className="font-open-sans" />
                <Input placeholder="Тема сообщения" className="font-open-sans" />
                <Textarea placeholder="Ваше сообщение..." rows={4} className="font-open-sans" />
                <Button className="w-full bg-startup-blue hover:bg-blue-700 text-white font-open-sans">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-startup-gray text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Rocket" size={24} className="text-startup-blue" />
                <span className="text-xl font-inter font-bold">InnoTech</span>
              </div>
              <p className="text-gray-300 font-open-sans">
                Создаем технологии будущего уже сегодня
              </p>
            </div>

            <div>
              <h4 className="font-inter font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 font-open-sans">
                <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">О нас</a></li>
                <li><a href="#team" className="text-gray-300 hover:text-white transition-colors">Команда</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Карьера</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-inter font-semibold mb-4">Продукты</h4>
              <ul className="space-y-2 font-open-sans">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">CloudSync Pro</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">AI Analytics</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">MobileFirst</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-inter font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 font-open-sans">
                <li className="text-gray-300">+7 (495) 123-45-67</li>
                <li className="text-gray-300">hello@innotech.ru</li>
                <li className="text-gray-300">г. Москва, ул. Тверская, д. 1</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-8 pt-8 text-center">
            <p className="text-gray-300 font-open-sans">
              © 2024 InnoTech. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;