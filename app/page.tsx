"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Users, Globe, Zap, Calendar } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"

export default function Home() {
  const { t } = useLanguage()

  return (
    <>
      {/* Hero Section */}
      <section
        className="hero pt-32 pb-32 md:pb-40"
        style={{ background: "linear-gradient(135deg, #002A4A, #005DAB)" }}
      >
        <div className="container hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            {t("hero.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/90 text-lg mb-8 max-w-2xl"
          >
            {t("hero.description")}
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="#community"
              className="bg-[#00B8D9] text-[#002A4A] px-8 py-3 rounded-full font-semibold text-center hover:bg-[#B3E5FC] transition-all hover:-translate-y-1"
            >
              {t("hero.join")}
            </Link>
            <Link
              href="#features"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-center hover:bg-white/10 transition-all hover:-translate-y-1"
            >
              {t("hero.learn")}
            </Link>
          </motion.div>
        </div>
        <div className="wave-bg absolute bottom-0 left-0 w-full">
          <svg
            viewBox="0 0 1200 120"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              fill="#FFFFFF"
            />
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              fill="#FFFFFF"
            />
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              fill="#FFFFFF"
            />
          </svg>
        </div>
      </section>

      {/* Vision Section */}
      <AnimatedSection className="py-20 bg-white" id="vision">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002A4A] mb-4">{t("vision.title")}</h2>
            <p className="text-[#005DAB] text-xl">{t("vision.subtitle")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedCard delay={0.1}>
              <div className="bg-[#F5F5F5] rounded-2xl p-8 shadow-md hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-[#00B8D9] rounded-full flex items-center justify-center mb-6">
                  <Globe className="text-white" size={30} />
                </div>
                <h3 className="text-2xl font-bold text-[#002A4A] mb-4">{t("vision.card1.title")}</h3>
                <p className="text-gray-700">{t("vision.card1.description")}</p>
              </div>
            </AnimatedCard>
            <AnimatedCard delay={0.2}>
              <div className="bg-[#F5F5F5] rounded-2xl p-8 shadow-md hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-[#00B8D9] rounded-full flex items-center justify-center mb-6">
                  <Users className="text-white" size={30} />
                </div>
                <h3 className="text-2xl font-bold text-[#002A4A] mb-4">{t("vision.card2.title")}</h3>
                <p className="text-gray-700">{t("vision.card2.description")}</p>
              </div>
            </AnimatedCard>
            <AnimatedCard delay={0.3}>
              <div className="bg-[#F5F5F5] rounded-2xl p-8 shadow-md hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-[#00B8D9] rounded-full flex items-center justify-center mb-6">
                  <Zap className="text-white" size={30} />
                </div>
                <h3 className="text-2xl font-bold text-[#002A4A] mb-4">{t("vision.card3.title")}</h3>
                <p className="text-gray-700">{t("vision.card3.description")}</p>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </AnimatedSection>

      {/* Features Section */}
      <AnimatedSection className="py-20 bg-[#F5F5F5]" id="features">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#002A4A] mb-8">{t("features.title")}</h2>
              <ul className="space-y-8">
                <AnimatedListItem delay={0.1}>
                  <div className="flex items-start">
                    <div className="bg-[#005DAB] w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Users size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#002A4A] mb-2">{t("features.item1.title")}</h3>
                      <p className="text-gray-700">{t("features.item1.description")}</p>
                    </div>
                  </div>
                </AnimatedListItem>
                <AnimatedListItem delay={0.2}>
                  <div className="flex items-start">
                    <div className="bg-[#005DAB] w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Calendar size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#002A4A] mb-2">{t("features.item2.title")}</h3>
                      <p className="text-gray-700">{t("features.item2.description")}</p>
                    </div>
                  </div>
                </AnimatedListItem>
                <AnimatedListItem delay={0.3}>
                  <div className="flex items-start">
                    <div className="bg-[#005DAB] w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Zap size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#002A4A] mb-2">{t("features.item3.title")}</h3>
                      <p className="text-gray-700">{t("features.item3.description")}</p>
                    </div>
                  </div>
                </AnimatedListItem>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/busan-web3-gathering.png"
                  alt="해3DAO 특징"
                  width={600}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Video Section */}
      <AnimatedSection className="py-16 bg-white" id="video">
        <div className="container">
          <div className="section-header">
            <h2>{t("video.title")}</h2>
            <p>{t("video.description")}</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="aspect-video w-full overflow-hidden rounded-xl shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="해3DAO 소개 영상"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Community Section */}
      <AnimatedSection className="community" id="community">
        <div className="container">
          <div className="section-header">
            <h2>{t("community.title")}</h2>
            <p>{t("community.description")}</p>
          </div>
          <div className="community-cards">
            <AnimatedCard delay={0.1}>
              <div className="community-card">
                <div className="community-card-img">
                  <Image src="/web3-community-gathering.png" alt="밋업 이벤트" width={400} height={200} />
                </div>
                <div className="community-card-content">
                  <h3>{t("community.card1.title")}</h3>
                  <p>{t("community.card1.description")}</p>
                  <Link href="#" className="primary-btn">
                    {t("community.button.details")}
                  </Link>
                </div>
              </div>
            </AnimatedCard>
            <AnimatedCard delay={0.2}>
              <div className="community-card">
                <div className="community-card-img">
                  <Image src="/blockchain-builders.png" alt="해커톤" width={400} height={200} />
                </div>
                <div className="community-card-content">
                  <h3>{t("community.card2.title")}</h3>
                  <p>{t("community.card2.description")}</p>
                  <Link href="#" className="primary-btn">
                    {t("community.button.details")}
                  </Link>
                </div>
              </div>
            </AnimatedCard>
            <AnimatedCard delay={0.3}>
              <div className="community-card">
                <div className="community-card-img">
                  <Image src="/web3-workshop-community.png" alt="교육 워크샵" width={400} height={200} />
                </div>
                <div className="community-card-content">
                  <h3>{t("community.card3.title")}</h3>
                  <p>{t("community.card3.description")}</p>
                  <Link href="#" className="primary-btn">
                    {t("community.button.details")}
                  </Link>
                </div>
              </div>
            </AnimatedCard>
          </div>
          <div className="community-cta">
            <Link href="#" className="primary-btn">
              {t("community.button.join")}
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Newsletter Section */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-[#005DAB] to-[#00B8D9] text-white" id="newsletter">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("newsletter.title")}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">{t("newsletter.description")}</p>
          <div className="max-w-md mx-auto">
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder={t("newsletter.placeholder")}
                className="px-4 py-3 rounded-full sm:rounded-r-none text-black flex-grow"
                aria-label="이메일 주소"
              />
              <motion.button
                type="submit"
                className="bg-white text-[#005DAB] px-6 py-3 rounded-full sm:rounded-l-none font-semibold hover:bg-[#F5F5F5] transition-colors whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t("newsletter.button")}
              </motion.button>
            </form>
          </div>
        </div>
      </AnimatedSection>

      {/* Events Section */}
      <AnimatedSection className="roadmap" id="events">
        <div className="container">
          <div className="section-header">
            <h2>{t("events.title")}</h2>
            <p>{t("events.description")}</p>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <span className="timeline-date">6월 8일</span>
                <h3>{t("events.event1.title")}</h3>
                <p>{t("events.event1.description")}</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <span className="timeline-date">6월 22일</span>
                <h3>{t("events.event2.title")}</h3>
                <p>{t("events.event2.description")}</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <span className="timeline-date">7월 5일</span>
                <h3>{t("events.event3.title")}</h3>
                <p>{t("events.event3.description")}</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Language Section */}
      <AnimatedSection className="py-16 bg-white" id="language">
        <div className="container text-center">
          <h2 className="text-2xl font-bold text-[var(--deep-navy)] mb-4">{t("language.title")}</h2>
          <p className="text-[var(--ocean-blue)] mb-8">{t("language.description")}</p>
          <LanguageSwitcher />
        </div>
      </AnimatedSection>
    </>
  )
}

// Animation Components
const AnimatedSection = ({ children, className, id }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      className={className}
      id={id}
    >
      {children}
    </motion.section>
  )
}

const AnimatedCard = ({ children, delay = 0 }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delay: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

const AnimatedListItem = ({ children, delay = 0 }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.li
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, x: -20 },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.5,
            delay: delay,
          },
        },
      }}
    >
      {children}
    </motion.li>
  )
}
