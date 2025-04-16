"use client"

import { useState } from "react"
import { ChevronRight, Users, Building, Globe } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export default function RoadmapSection() {
  const [activeStage, setActiveStage] = useState(1)

  const stages = [
    {
      id: 1,
      title: "로컬 커뮤니티 DAO",
      icon: <Users className="w-6 h-6" />,
      scale: "100~500명의 핵심 멤버",
      activities: ["부산 기반 Web3 커뮤니티 운영", "로컬 브랜드와 협업", "자체 NFT, 굿즈, 밈코인 등 밈 중심 문화 형성"],
      conclusion: "해3DAO는 이 단계에서 '지역 Web3 허브'로 자리잡을 수 있어.",
    },
    {
      id: 2,
      title: "DAO 인프라 및 토크노믹스 확장",
      icon: <Building className="w-6 h-6" />,
      scale: "500~5,000명 (유저 + 빌더 + 프로젝트 팀)",
      activities: [
        "동백Pay X 해3DAO 연계한 크립토 페이먼트/리워드 시스템",
        "해양 문화, 친환경, 부산시 정책과 연계한 ESG DAO 플랫폼",
        "Research DAO, Treasury DAO, Edu DAO 같은 하위 DAO 체계화",
      ],
      conclusion: "이 단계에서 HAE3DAO는 '로컬 DAO 거버넌스 인프라 제공자'로 전환 가능.",
    },
    {
      id: 3,
      title: "글로벌 확장형 Web3 DAO 모델",
      icon: <Globe className="w-6 h-6" />,
      scale: "5,000~50,000명 이상 (글로벌 디지털 노마드 및 해양도시 네트워크)",
      activities: [
        "다른 해양 도시와 연계된 DAO 간 네트워크 형성",
        "글로벌 해양-ESG 펀딩 DAO, 토큰 기반 투표/의사결정 시스템 확장",
        "HAE3 Launchpad로 Web3 스타트업의 초기 펀딩 및 테스트베드 제공",
      ],
      conclusion: "이 단계에서는 '글로벌 해양 도시 연합 DAO' 혹은 'Web3 기반 지방자치 모델'로까지 확장 가능.",
    },
  ]

  // 물결 효과를 위한 SVG 경로
  const wavePath = "M0,96 C320,64 480,128 640,96 C800,64 960,128 1280,96 L1280,192 L0,192 Z"

  return (
    <section className="py-20 bg-[#002b49] relative overflow-hidden">
      {/* 상단 물결 효과 */}
      <div className="absolute top-0 left-0 w-full">
        <svg
          width="100%"
          height="48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1280 192"
          className="text-white"
        >
          <path d={wavePath} fill="currentColor" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">해3DAO 로드맵</h2>
          <p className="text-xl text-teal-200">Local Roots. Global Chains.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-[#001a2e] rounded-full p-1.5 shadow-lg">
            {stages.map((stage) => (
              <motion.button
                key={stage.id}
                onClick={() => setActiveStage(stage.id)}
                className={`flex items-center px-4 py-2 rounded-full transition-all relative ${
                  activeStage === stage.id ? "text-white" : "text-gray-300 hover:text-white"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeStage === stage.id && (
                  <motion.div
                    layoutId="activeStageBackground"
                    className="absolute inset-0 bg-teal-500 rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="mr-2 relative z-10">{stage.icon}</span>
                <span className="hidden md:inline relative z-10">{stage.id}단계</span>
                <span className="inline md:hidden relative z-10">{stage.id}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-[#00365c] rounded-xl p-6 md:p-8 shadow-lg"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="flex items-center mb-6"
              >
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center mr-4"
                >
                  {stages[activeStage - 1].icon}
                </motion.div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">{stages[activeStage - 1].title}</h3>
                  <p className="text-teal-200 text-sm md:text-base">{stages[activeStage - 1].scale}</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="mb-6"
              >
                <h4 className="text-lg font-semibold text-white mb-3">핵심 활동</h4>
                <ul className="space-y-2">
                  {stages[activeStage - 1].activities.map((activity, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      className="flex items-start text-gray-200"
                    >
                      <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                        <ChevronRight className="h-5 w-5 mr-2 text-teal-400 shrink-0 mt-0.5" />
                      </motion.div>
                      <span>{activity}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="bg-[#002b49] rounded-lg p-4 text-teal-300 font-medium"
              >
                {stages[activeStage - 1].conclusion}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-10"
        >
          <Link href="/roadmap">
            <Button
              className="bg-teal-500 hover:bg-teal-600 text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              as={motion.button}
            >
              전체 로드맵 보기
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* 하단 물결 효과 */}
      <div className="absolute bottom-0 left-0 w-full rotate-180">
        <svg
          width="100%"
          height="48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1280 192"
          className="text-[#001a2e]"
        >
          <path d={wavePath} fill="currentColor" />
        </svg>
      </div>
    </section>
  )
}
