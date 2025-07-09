import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const characters = [
    {
      name: "Подсолнух",
      type: "plant",
      cost: 50,
      emoji: "🌻",
      description: "Производит солнце",
    },
    {
      name: "Горохострел",
      type: "plant",
      cost: 100,
      emoji: "🌱",
      description: "Стреляет горошинами",
    },
    {
      name: "Орех",
      type: "plant",
      cost: 50,
      emoji: "🥜",
      description: "Защищает растения",
    },
    {
      name: "Обычный зомби",
      type: "zombie",
      hp: 200,
      emoji: "🧟‍♂️",
      description: "Медленный и опасный",
    },
    {
      name: "Конусоголовый",
      type: "zombie",
      hp: 640,
      emoji: "🧟‍♀️",
      description: "Прочная защита головы",
    },
    {
      name: "Ведроголовый",
      type: "zombie",
      hp: 1370,
      emoji: "🧟",
      description: "Очень крепкий",
    },
  ];

  const levels = [
    { name: "День 1-1", difficulty: "Легко", emoji: "☀️", status: "completed" },
    { name: "День 1-2", difficulty: "Легко", emoji: "☀️", status: "completed" },
    { name: "Ночь 2-1", difficulty: "Средне", emoji: "🌙", status: "active" },
    { name: "Туман 3-1", difficulty: "Сложно", emoji: "🌫️", status: "locked" },
    { name: "Крыша 4-1", difficulty: "Сложно", emoji: "🏠", status: "locked" },
    {
      name: "Бассейн 5-1",
      difficulty: "Очень сложно",
      emoji: "🏊‍♂️",
      status: "locked",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sun-yellow/20 to-plant-green/20">
      {/* Header */}
      <header className="bg-earth-brown text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <span className="text-4xl animate-bounce-slow">🌱</span>
            <h1
              className="text-3xl font-bold font-['Rubik']"
              style={{
                textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                color: "#FFEB3B",
              }}
            >
              PLANTS vs ZOMBIES
            </h1>
          </div>
          <nav className="flex space-x-6">
            <Button
              variant="ghost"
              className="text-white hover:bg-plant-green/20"
            >
              <Icon name="Home" size={20} className="mr-2" />
              Главная
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:bg-plant-green/20"
            >
              <Icon name="Users" size={20} className="mr-2" />
              Персонажи
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:bg-plant-green/20"
            >
              <Icon name="Target" size={20} className="mr-2" />
              Уровни
            </Button>
            <Button className="bg-zombie-orange hover:bg-zombie-orange/80 text-white font-bold">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Telegram
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-6xl font-bold mb-6 text-earth-brown font-['Rubik']"
            style={{ textShadow: "3px 3px 6px rgba(0,0,0,0.3)" }}
          >
            Защищай свой дом от нашествия зомби! 🏠
          </h2>
          <p className="text-xl mb-8 text-earth-brown/80 max-w-2xl mx-auto leading-relaxed">
            Используй армию растений, чтобы остановить орды голодных зомби.
            Стратегия, тактика и немного удачи - всё что нужно для победы!
          </p>

          <div className="mb-12">
            <img
              src="/img/2b195bef-1846-42de-aff5-68055a356f86.jpg"
              alt="Plants vs Zombies Hero"
              className="mx-auto rounded-2xl shadow-2xl max-w-md hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="flex justify-center space-x-4">
            <Button
              size="lg"
              className="bg-plant-green hover:bg-plant-green/80 text-white font-bold px-8 py-3 text-lg shadow-lg"
            >
              <Icon name="Play" size={24} className="mr-2" />
              Начать игру
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-plant-green text-plant-green hover:bg-plant-green/10 font-bold px-8 py-3 text-lg"
            >
              <Icon name="BookOpen" size={24} className="mr-2" />
              Как играть
            </Button>
          </div>
        </div>
      </section>

      {/* Characters Section */}
      <section className="bg-white/50 py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12 text-earth-brown font-['Rubik']">
            Персонажи
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {characters.map((char, index) => (
              <Card
                key={index}
                className={`hover:scale-105 transition-all duration-300 shadow-lg border-2 ${
                  char.type === "plant"
                    ? "border-plant-green hover:shadow-plant-green/20"
                    : "border-zombie-orange hover:shadow-zombie-orange/20"
                }`}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-6xl mb-4 animate-bounce-slow">
                    {char.emoji}
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-earth-brown">
                    {char.name}
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    {char.description}
                  </p>
                  <div className="flex justify-center items-center space-x-2">
                    {char.type === "plant" ? (
                      <Badge className="bg-sun-yellow text-earth-brown font-bold">
                        <Icon name="Coins" size={16} className="mr-1" />
                        {char.cost} солнца
                      </Badge>
                    ) : (
                      <Badge className="bg-zombie-orange text-white font-bold">
                        <Icon name="Heart" size={16} className="mr-1" />
                        {char.hp} HP
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Levels Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12 text-earth-brown font-['Rubik']">
            Уровни приключений
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {levels.map((level, index) => (
              <Card
                key={index}
                className={`transition-all duration-300 shadow-lg ${
                  level.status === "completed"
                    ? "border-plant-green bg-plant-green/5"
                    : level.status === "active"
                      ? "border-sun-yellow bg-sun-yellow/5 hover:scale-105"
                      : "border-gray-300 bg-gray-50 opacity-60"
                }`}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-5xl mb-4">{level.emoji}</div>
                  <h4 className="text-xl font-bold mb-2 text-earth-brown">
                    {level.name}
                  </h4>
                  <div className="flex justify-center items-center space-x-2 mb-4">
                    <Badge
                      className={`${
                        level.difficulty === "Легко"
                          ? "bg-plant-green"
                          : level.difficulty === "Средне"
                            ? "bg-sun-yellow text-earth-brown"
                            : level.difficulty === "Сложно"
                              ? "bg-zombie-orange"
                              : "bg-red-600"
                      } text-white font-bold`}
                    >
                      {level.difficulty}
                    </Badge>
                  </div>
                  {level.status === "completed" && (
                    <div className="flex justify-center items-center text-plant-green font-bold">
                      <Icon name="CheckCircle" size={20} className="mr-1" />
                      Пройден
                    </div>
                  )}
                  {level.status === "active" && (
                    <Button className="bg-sun-yellow hover:bg-sun-yellow/80 text-earth-brown font-bold">
                      <Icon name="Play" size={16} className="mr-2" />
                      Играть
                    </Button>
                  )}
                  {level.status === "locked" && (
                    <div className="flex justify-center items-center text-gray-400">
                      <Icon name="Lock" size={20} className="mr-1" />
                      Заблокирован
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Telegram CTA */}
      <section className="bg-zombie-orange text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-6 font-['Rubik']">
            Присоединяйся к сообществу! 🎮
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Получай последние новости, секреты прохождения и общайся с другими
            игроками в нашем Telegram канале
          </p>
          <Button
            size="lg"
            className="bg-white text-zombie-orange hover:bg-gray-100 font-bold px-12 py-4 text-lg shadow-lg"
          >
            <Icon name="MessageCircle" size={24} className="mr-3" />
            Подписаться на канал
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-earth-brown text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <span className="text-2xl">🌱</span>
            <span className="text-xl font-bold font-['Rubik']">
              PLANTS vs ZOMBIES
            </span>
            <span className="text-2xl">🧟‍♂️</span>
          </div>
          <p className="text-sm opacity-75">
            © 2024 Plants vs Zombies Fan Site. Создано с ❤️ для любителей tower
            defense игр
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
