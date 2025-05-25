import { useState, useEffect } from "react";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Target,
  Lock,
  Shield,
  Crown,
  Flame,
  Timer,
  TrendingUp,
  AlertCircle,
  BarChart3,
  Brain,
  Rocket,
  Eye,
  Sparkles,
  Lightbulb,
} from "lucide-react";

const FocusFlowLanding = () => {
  const scrollToSection = () => {
    const el = document.getElementById("price");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const [timeLeft, setTimeLeft] = useState({
    hours: 4,
    minutes: 23,
    seconds: 47,
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [scrollY, setScrollY] = useState(0);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: "IA COGNITIVA",
      desc: "Algoritmo que aprende seu padrão mental e otimiza sua performance automaticamente",
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: "FOCO LASER",
      desc: "Elimina 99% das distrações e mantém você hiperfocado por horas",
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "MÉTRICAS REAIS",
      desc: "Dashboard em tempo real mostra exatamente onde você está perdendo tempo",
    },
  ];

  const testimonials = [
    {
      name: "Ana Rodrigues",
      role: "CEO, TechStart",
      content:
        "Minha produtividade explodiu 400%. Consigo entregar em 2 horas o que levava o dia todo.",
      metric: "+400% produtividade",
      avatar: "👩‍💼",
    },
    {
      name: "Carlos Mendes",
      role: "Freelancer Premium",
      content:
        "Triplicou minha capacidade de projetos. Agora trabalho menos e ganho 10x mais.",
      metric: "3x mais projetos",
      avatar: "👨‍💻",
    },
    {
      name: "Marina Silva",
      role: "Consultora",
      content:
        "Zero procrastinação. Meus clientes me veem como a pessoa mais eficiente que conhecem.",
      metric: "Zero procrastinação",
      avatar: "🚀",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Urgency Bar */}
      <div className="bg-gradient-to-r from-red-600 via-orange-500 to-red-600 text-white text-center py-3 font-bold animate-pulse relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
        <div className="relative flex items-center justify-center space-x-4">
          <Flame className="w-5 h-5 animate-bounce" />
          <span className="text-lg">
            ⚡ OFERTA EXPIRA EM {String(timeLeft.hours).padStart(2, "0")}:
            {String(timeLeft.minutes).padStart(2, "0")}:
            {String(timeLeft.seconds).padStart(2, "0")} ⚡
          </span>
          <Flame className="w-5 h-5 animate-bounce" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-black via-gray-900 to-purple-900/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.1)_0%,transparent_70%)]"></div>

        <div className="relative max-w-6xl mx-auto text-center z-10">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
            <Crown className="w-5 h-5 text-yellow-400" />
            <span className="text-purple-300 font-semibold">
              Plataforma #1 de Produtividade
            </span>
            <Crown className="w-5 h-5 text-yellow-400" />
          </div>

          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              FOCUS
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              FLOW
            </span>
          </h1>

          <p className="text-2xl md:text-4xl mb-8 text-gray-300 font-light max-w-4xl mx-auto leading-relaxed">
            A única plataforma que{" "}
            <span className="text-yellow-400 font-bold">
              multiplica sua produtividade por 10x{" "}
            </span>
            usando inteligência artificial cognitiva
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            {features.map((feature, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-lg mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-2xl p-8 mb-12 backdrop-blur-sm">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Eye className="w-6 h-6 text-yellow-400" />
              <span className="text-yellow-400 font-bold text-lg">
                VEJA O QUE ACONTECE EM TEMPO REAL:
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-black text-green-400">+847%</div>
                <div className="text-xs text-gray-400">Produtividade Média</div>
              </div>
              <div>
                <div className="text-2xl font-black text-blue-400">23.4k</div>
                <div className="text-xs text-gray-400">Usuários Ativos</div>
              </div>
              <div>
                <div className="text-2xl font-black text-purple-400">99.2%</div>
                <div className="text-xs text-gray-400">Taxa de Sucesso</div>
              </div>
              <div>
                <div className="text-2xl font-black text-yellow-400">5.8h</div>
                <div className="text-xs text-gray-400">
                  Tempo Economizado/Dia
                </div>
              </div>
            </div>
          </div>

          <button
            className="group bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white px-12 py-6 rounded-2xl font-black text-2xl hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/50 flex items-center justify-center space-x-3 mx-auto mb-8 relative overflow-hidden"
            onClick={scrollToSection}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse"></div>
            <Rocket className="w-8 h-8 relative z-10" />
            <span className="relative z-10">
              QUERO MULTIPLICAR MINHA PRODUTIVIDADE
            </span>
            <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform relative z-10" />
          </button>

          <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
            <span className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-green-400" />
              <span>Garantia 7 dias</span>
            </span>
            <span className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-blue-400" />
              <span>+23k usuários</span>
            </span>
            <span className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-yellow-400" />
              <span>4.9/5 estrelas</span>
            </span>
          </div>
        </div>
      </section>

      {/* Problem/Agitation */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-8">
              <span className="text-red-500">PARE DE MENTIR</span>
              <br />
              <span className="text-white">PARA VOCÊ MESMO</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Você sabe que está{" "}
              <span className="text-red-400 font-bold">
                desperdiçando sua vida
              </span>{" "}
              em tarefas inúteis enquanto seus objetivos ficam cada vez mais
              distantes...
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-red-900/20 border border-red-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-red-400 flex items-center">
                <AlertCircle className="w-6 h-6 mr-3" />
                REALIDADE BRUTAL:
              </h3>
              <div className="space-y-4 text-gray-300">
                <p>❌ Você perde 6+ horas por dia em distrações</p>
                <p>❌ Procrastina projetos importantes há meses</p>
                <p>❌ Termina o dia exausto mas com pouco feito</p>
                <p>❌ Seus concorrentes estão te ultrapassando</p>
                <p>❌ Sua família vê você sempre estressado</p>
              </div>
            </div>

            <div className="bg-green-900/20 border border-green-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-green-400 flex items-center">
                <Sparkles className="w-6 h-6 mr-3" />O QUE PODERIA SER:
              </h3>
              <div className="space-y-4 text-gray-300">
                <p>✅ Hiperfoco absoluto por 8+ horas diárias</p>
                <p>✅ Completa projetos em 1/4 do tempo</p>
                <p>✅ Trabalha menos, conquista 10x mais</p>
                <p>✅ Domina seu mercado sem esforço</p>
                <p>✅ Tempo livre para o que realmente importa</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-2xl p-8 text-center">
            <h3 className="text-3xl font-black mb-4 text-yellow-400">
              ⚠️ A VERDADE QUE NINGUÉM CONTA:
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              Pessoas{" "}
              <span className="text-white font-bold">
                MENOS qualificadas que você
              </span>{" "}
              estão conquistando 10x mais resultados simplesmente porque usam as{" "}
              <span className="text-green-400 font-bold">
                ferramentas certas
              </span>
              . Enquanto você luta contra sua própria mente, elas operam no{" "}
              <span className="text-purple-400 font-bold">modo automático</span>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-8">
              VEJA OS <span className="text-purple-400">RESULTADOS REAIS</span>
            </h2>
            <p className="text-xl text-gray-400">
              Mais de 23.000 profissionais já transformaram sua produtividade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">{testimonial.avatar}</div>
                  <div className="bg-gradient-to-r from-green-400 to-blue-400 text-black px-4 py-2 rounded-full text-sm font-bold">
                    {testimonial.metric}
                  </div>
                </div>
                <p className="text-gray-300 italic mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-gray-700 pt-4">
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "23.4k+", label: "Usuários Ativos" },
              { number: "847%", label: "Aumento Médio" },
              { number: "99.2%", label: "Taxa de Sucesso" },
              { number: "4.9★", label: "Avaliação" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl p-6 border border-purple-500/20"
              >
                <div className="text-3xl font-black text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Deep Dive */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-8">
              <span className="text-white">TECNOLOGIA</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                REVOLUCIONÁRIA
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-purple-400">
                🧠 IA COGNITIVA AVANÇADA
              </h3>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  Nossa inteligência artificial{" "}
                  <span className="text-white font-bold">
                    mapeia seu cérebro
                  </span>{" "}
                  e identifica seus padrões únicos de concentração.
                </p>
                <p>
                  Em 48h, ela já sabe{" "}
                  <span className="text-green-400 font-bold">
                    exatamente quando
                  </span>{" "}
                  você vai perder o foco e{" "}
                  <span className="text-yellow-400 font-bold">
                    te mantém no trilho
                  </span>
                  .
                </p>
                <p>
                  É como ter um{" "}
                  <span className="text-purple-400 font-bold">
                    coach pessoal 24/7
                  </span>{" "}
                  que conhece você melhor que você mesmo.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-2xl p-8 border border-purple-500/30">
              <div className="text-center">
                <Brain className="w-20 h-20 text-purple-400 mx-auto mb-4" />
                <div className="text-2xl font-bold text-white mb-2">
                  Análise Neural
                </div>
                <div className="text-purple-300">
                  Mapeamento Cognitivo em Tempo Real
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Lightbulb className="w-12 h-12 text-yellow-400" />,
                title: "BLOQUEIO NEURAL",
                desc: "Elimina distrações diretamente no seu cérebro antes mesmo delas aparecerem",
              },
              {
                icon: <Target className="w-12 h-12 text-green-400" />,
                title: "FOCO LASER",
                desc: "Mantém você hiperfocado por até 12 horas seguidas sem fadiga mental",
              },
              {
                icon: <TrendingUp className="w-12 h-12 text-blue-400" />,
                title: "AUTO-OTIMIZAÇÃO",
                desc: "Melhora automaticamente sua performance a cada dia que passa",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-black border border-gray-800 rounded-2xl p-8 text-center hover:border-purple-500/50 transition-all duration-300 group"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-8 py-4 rounded-full inline-block mb-8 font-black text-lg animate-pulse">
            🚨 ÚLTIMAS {Math.floor(Math.random() * 30) + 10} LICENÇAS
            DISPONÍVEIS 🚨
          </div>

          <h2 className="text-5xl md:text-6xl font-black mb-8">
            <span className="text-white">QUANTO VALE</span>
            <br />
            <span className="text-green-400">SUA LIBERDADE?</span>
          </h2>

          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-2xl p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="text-left space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-white">🤖 IA Cognitiva Avançada</span>
                  <span className="text-green-400 font-bold">R$ 2.497</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-white">⚡ Sistema Anti-Distração</span>
                  <span className="text-green-400 font-bold">R$ 1.497</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-white">📊 Dashboard Tempo Real</span>
                  <span className="text-green-400 font-bold">R$ 997</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-white">
                    🎯 Templates de Produtividade
                  </span>
                  <span className="text-green-400 font-bold">R$ 797</span>
                </div>
              </div>
              <div className="text-left space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-white">🧠 Treinamento Neural</span>
                  <span className="text-green-400 font-bold">R$ 1.997</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-white">📱 App Mobile Premium</span>
                  <span className="text-green-400 font-bold">R$ 597</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-white">🔄 Atualizações Vitalícias</span>
                  <span className="text-green-400 font-bold">R$ 1.497</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-white">🏆 Suporte VIP</span>
                  <span className="text-green-400 font-bold">R$ 997</span>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-600 pt-6">
              <div className="text-right mb-4">
                <p className="text-xl text-gray-400">Valor Total:</p>
                <p className="text-4xl font-bold text-red-500 line-through">
                  R$ 10.875
                </p>
              </div>
            </div>
          </div>

          <div className="mb-8" id="price">
            <p className="text-2xl mb-4 text-gray-300">
              Seu investimento hoje:
            </p>
            <div className="text-7xl font-black text-green-400 mb-4">
              R$ 19,90<span className="text-2xl">/mês</span>
            </div>
            <p className="text-2xl text-yellow-400 font-bold mb-2">
              7 dias de garantia
            </p>
            <p className="text-red-400 font-bold text-xl">
              Desconto de 95% - Por tempo limitado!
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 border border-green-500/50 rounded-2xl p-6 mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Shield className="w-8 h-8 text-green-400" />
              <span className="text-2xl font-bold text-green-400">
                GARANTIA TOTAL
              </span>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">
              7 dias para testar tudo. Se não multiplicar sua produtividade por
              pelo menos 5x, devolvemos{" "}
              <span className="text-green-400 font-bold">
                100% do seu dinheiro
              </span>
              . Sem perguntas, sem burocração.
            </p>
          </div>

          <a href="https://pay.kiwify.com.br/sb9Om6R">
            <button className="group bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 text-white px-16 py-8 rounded-2xl font-black text-3xl hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-green-500/50 flex items-center justify-center space-x-4 mx-auto mb-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse"></div>
              <Rocket className="w-10 h-10 relative z-10" />
              <span className="relative z-10">QUERO FOCUSFLOW PRO AGORA!</span>
              <ArrowRight className="w-10 h-10 group-hover:translate-x-2 transition-transform relative z-10" />
            </button>
          </a>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-400 mb-8">
            <div className="flex items-center justify-center space-x-2">
              <Lock className="w-4 h-4 text-green-400" />
              <span>Pagamento Seguro</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Lightbulb className="w-4 h-4 text-yellow-400" />
              <span>Acesso Imediato</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Shield className="w-4 h-4 text-blue-400" />
              <span>Garantia 7 dias</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Crown className="w-4 h-4 text-purple-400" />
              <span>Suporte VIP</span>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/50 rounded-xl p-6 font-bold text-lg">
            ⚠️ ATENÇÃO: O preço volta para R$ 10.875 quando o timer zerar. Esta
            é sua única chance de garantir o desconto de 95%!
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black mb-12 text-center">
            DÚVIDAS QUE{" "}
            <span className="text-yellow-400">ESTÃO NA SUA CABEÇA</span>
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "🤖 A IA realmente funciona ou é só marketing?",
                a: "Nossa IA foi treinada com dados de mais de 100.000 profissionais de alta performance. Ela identifica seus padrões únicos em 48h e se adapta continuamente. É a mesma tecnologia usada por grandes corporações para otimizar seus executivos.",
              },
              {
                q: "⚡ Quanto tempo leva para ver resultados?",
                a: "A maioria dos usuários vê um aumento de 200-300% na produtividade nas primeiras 48h. Em 7 dias, o aumento médio é de 500%. Em 7 dias, muitos relatam estar 10x mais produtivos.",
              },
              {
                q: "💻 Funciona no meu computador/celular?",
                a: "Sim! FocusFlow funciona em qualquer dispositivo: Windows, Mac, iOS, Android, Linux. Tudo sincroniza automaticamente na nuvem. Você pode começar no computador e continuar no celular.",
              },
              {
                q: "💰 E se eu não conseguir pagar à vista?",
                a: "Pode parcelar em até 12x sem juros de R$ 49,70. É menos que um lanche por dia! Considere: quanto você perde por mês sendo improdutivo? Uma promoção perdida vale muito mais que R$ 497.",
              },
              {
                q: "🔒 E se não funcionar comigo?",
                a: "Impossível! Nosso sistema tem 99.2% de taxa de sucesso. Mas se por algum motivo não multiplicar sua produtividade em 7 dias, devolvemos 100% do investimento. Risco zero para você.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-black/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300"
              >
                <h3 className="font-bold text-xl mb-3 text-yellow-400">
                  {faq.q}
                </h3>
                <p className="text-gray-300 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-400 mb-6">
              Ainda tem dúvidas? Nossa equipe responde em menos de 2 minutos.
            </p>
            <div className="inline-flex items-center space-x-2 bg-green-600/20 border border-green-500/30 rounded-full px-6 py-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-semibold">
                Suporte Online 24/7
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-12">
            <span className="text-red-500">ÚLTIMA</span>
            <br />
            <span className="text-white">OPORTUNIDADE</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-red-900/30 to-red-800/30 border border-red-500/50 rounded-2xl p-8">
              <h3 className="text-3xl font-bold mb-6 text-red-400 flex items-center justify-center">
                <AlertCircle className="w-8 h-8 mr-3" />
                SE VOCÊ SAIR:
              </h3>
              <div className="space-y-4 text-gray-300 text-lg">
                <p>❌ Continuará desperdiçando 6+ horas por dia</p>
                <p>❌ Seus concorrentes vão te ultrapassar</p>
                <p>❌ Nunca mais terá essa oportunidade</p>
                <p>❌ Pagará R$ 10.875 se mudar de ideia</p>
                <p>❌ Ficará preso na mediocridade para sempre</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-900/30 to-emerald-800/30 border border-green-500/50 rounded-2xl p-8">
              <h3 className="text-3xl font-bold mb-6 text-green-400 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 mr-3" />
                SE VOCÊ AGIR:
              </h3>
              <div className="space-y-4 text-gray-300 text-lg">
                <p>✅ Multiplicará sua produtividade por 10x</p>
                <p>✅ Dominará seu mercado sem esforço</p>
                <p>✅ Terá tempo livre para família e lazer</p>
                <p>✅ Economizará R$ 10.378 hoje mesmo</p>
                <p>✅ Transformará sua vida para sempre</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 border border-orange-500/50 rounded-2xl p-8 mb-12">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Timer className="w-8 h-8 text-orange-400 animate-pulse" />
              <span className="text-3xl font-black text-orange-400">
                OFERTA EXPIRA EM: {String(timeLeft.hours).padStart(2, "0")}:
                {String(timeLeft.minutes).padStart(2, "0")}:
                {String(timeLeft.seconds).padStart(2, "0")}
              </span>
            </div>
            <p className="text-xl text-gray-300">
              Quando o timer zerar, o preço volta para R$ 10.875 e as vagas se
              esgotam.
              <br />
              <span className="text-red-400 font-bold">
                Esta é literalmente sua última chance!
              </span>
            </p>
          </div>

          <a href="https://pay.kiwify.com.br/sb9Om6R">
            <button className="group bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white px-20 py-10 rounded-2xl font-black text-4xl hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/50 flex items-center justify-center space-x-4 mx-auto mb-12 relative overflow-hidden animate-pulse">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-pulse"></div>
              <Crown className="w-12 h-12 relative z-10" />
              <span className="relative z-10">
                QUERO MINHA TRANSFORMAÇÃO AGORA!
              </span>
              <Flame className="w-12 h-12 relative z-10 animate-bounce" />
            </button>
          </a>

          <div className="mb-8">
            <p className="text-2xl text-green-400 font-bold mb-4">
              🎯 ACESSO IMEDIATO - COMECE EM 2 MINUTOS
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-400">
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center font-bold text-white">
                  1
                </div>
                <span>Clique no botão</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white">
                  2
                </div>
                <span>Preencha dados</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center font-bold text-white">
                  3
                </div>
                <span>Confirme pagamento</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center font-bold text-white">
                  4
                </div>
                <span>Acesse tudo!</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-xl p-6">
            <p className="text-xl text-yellow-400 font-bold">
              ⚡ MAIS DE 347 PESSOAS ADQUIRIRAM NAS ÚLTIMAS 24 HORAS ⚡
            </p>
            <p className="text-gray-300 mt-2">
              Não seja mais um que vai se arrepender de não ter agido quando
              teve a chance.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 px-4 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              FOCUSFLOW PRO
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              A plataforma de produtividade mais avançada do mundo.
              Transformando vidas através da tecnologia de ponta e inteligência
              artificial cognitiva.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-sm">
            <div>
              <h4 className="font-bold text-white mb-3">Suporte</h4>
              <div className="space-y-2 text-gray-400">
                <p>📧 focusflow449@gmail.com</p>
                <p>📱 WhatsApp: (81) 98542-3047</p>
                <p>🕐 Disponível 24/7</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3">Garantias</h4>
              <div className="space-y-2 text-gray-400">
                <p>✅ 7 dias de garantia</p>
                <p>🔒 Pagamento 100% seguro</p>
                <p>🎯 Suporte premium incluso</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3">Empresa</h4>
              <div className="space-y-2 text-gray-400">
                <p>🏢 FocusFlow - CRF Company Tech.</p>
                <p>📍 São Paulo, Brasil</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm mb-4">
              © 2025 FocusFlow Todos os direitos reservados.
            </p>
            <p className="text-gray-500 text-xs leading-relaxed max-w-3xl mx-auto">
              Este produto não garante resultados específicos. Os resultados
              podem variar de pessoa para pessoa. Qualquer referência a
              desempenho é baseada em casos reais de usuários, mas não deve ser
              interpretada como garantia. Consulte nossos termos de uso e
              política de privacidade para mais informações.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FocusFlowLanding;
