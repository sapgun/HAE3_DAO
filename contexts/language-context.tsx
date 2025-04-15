"use client"

import type React from "react"
import { createContext, useState, useContext, useEffect } from "react"

type Language = "ko" | "en" | "ja"

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const translations = {
  ko: {
    // Header
    "nav.vision": "비전",
    "nav.features": "특징",
    "nav.community": "커뮤니티",
    "nav.events": "이벤트",
    "button.connect": "지갑 연결하기",

    // Hero
    "hero.title": "Web3의 파도는 바다에서 시작된다",
    "hero.description":
      "해3DAO는 부산의 해양도시 정체성과 Web3 기술 철학을 결합한 지역 기반 커뮤니티입니다. 바다처럼 개방적이고 분산된 커뮤니티를 지향하며, 로컬에서 시작해 글로벌 Web3 허브로 성장하는 것을 목표로 합니다.",
    "hero.join": "커뮤니티 가입하기",
    "hero.learn": "더 알아보기",

    // Vision
    "vision.title": "해3DAO의 비전",
    "vision.subtitle": "Local Roots. Global Chains.",
    "vision.card1.title": "개방적인 커뮤니티",
    "vision.card1.description":
      "바다처럼 개방적이고 자유로운 커뮤니티를 구축합니다. 모든 참여자는 동등한 권리와 책임을 가지며, 다양한 의견이 공존할 수 있는 환경을 만듭니다.",
    "vision.card2.title": "탈중앙화된 거버넌스",
    "vision.card2.description":
      "제안 → 투표 → 실행 구조의 참여형 DAO 운영을 통해 모든 구성원이 의사결정에 참여할 수 있는 투명한 거버넌스 시스템을 구축합니다.",
    "vision.card3.title": "Web3 실험실",
    "vision.card3.description":
      "NFT, 토큰, 온체인 실험 프로젝트를 직접 설계하고 실행합니다. 지역 기반 Web3 프로젝트를 통해 실질적인 가치를 창출합니다.",

    // Features
    "features.title": "해3DAO의 특징",
    "features.item1.title": "커뮤니티 주도 거버넌스",
    "features.item1.description": "모든 구성원이 의사결정에 참여하는 투명한 거버넌스 시스템을 운영합니다.",
    "features.item2.title": "지역 기반 이벤트",
    "features.item2.description": "부산에서 열리는 밋업, 해커톤, 커뮤니티 세션을 통해 오프라인 네트워킹을 강화합니다.",
    "features.item3.title": "Web3 실험 프로젝트",
    "features.item3.description": "NFT, 토큰, 온체인 실험 프로젝트를 직접 설계하고 실행하는 기회를 제공합니다.",

    // Video
    "video.title": "🎥 해3DAO 소개 영상",
    "video.description": "아래 영상으로 해3DAO의 활동을 간략히 소개합니다.",

    // Community
    "community.title": "커뮤니티 활동",
    "community.description": "해3DAO의 다양한 커뮤니티 활동에 참여해보세요.",
    "community.card1.title": "정기 밋업",
    "community.card1.description": "매월 부산에서 열리는 정기 밋업에서 Web3 지식을 나누고 네트워킹할 수 있습니다.",
    "community.card2.title": "해커톤",
    "community.card2.description": "분기별로 개최되는 해커톤에서 아이디어를 실현하고 팀을 구성해보세요.",
    "community.card3.title": "교육 워크샵",
    "community.card3.description": "Web3 기술과 개념에 대한 교육 워크샵을 통해 지식을 쌓아보세요.",
    "community.button.details": "자세히 보기",
    "community.button.join": "커뮤니티 참여하기",

    // Newsletter
    "newsletter.title": "📮 뉴스레터 구독",
    "newsletter.description": "Web3 커뮤니티 소식을 받아보세요.",
    "newsletter.placeholder": "이메일 주소 입력",
    "newsletter.button": "구독하기",

    // Events
    "events.title": "🗓️ 다가오는 이벤트",
    "events.description": "해3DAO의 다가오는 이벤트 일정을 확인하세요.",
    "events.event1.title": "해3DAO 오프닝 밋업",
    "events.event1.description": "부산 센텀시티에서 열리는 첫 번째 공식 밋업에 참여하세요.",
    "events.event2.title": "Web3 커뮤니티 해커톤",
    "events.event2.description": "부산 스타트업 허브에서 48시간 동안 진행되는 해커톤입니다.",
    "events.event3.title": "지역 파트너십 발표 세션",
    "events.event3.description": "부산 지역 기업들과의 파트너십 발표 및 네트워킹 세션입니다.",

    // Language
    "language.title": "🌐 언어 선택",
    "language.description": "Switch Language",
    "language.ko": "한국어",
    "language.en": "영어",
    "language.ja": "일본어",

    // Footer
    "footer.about":
      "해3DAO는 부산의 해양도시 정체성과 Web3 기술 철학을 결합한 지역 기반 커뮤니티입니다. 바다처럼 개방적이고 분산된 커뮤니티를 지향합니다.",
    "footer.links": "링크",
    "footer.resources": "리소스",
    "footer.resources.whitepaper": "백서",
    "footer.resources.docs": "문서",
    "footer.resources.github": "GitHub",
    "footer.resources.faq": "FAQ",
    "footer.newsletter": "뉴스레터 구독",
    "footer.newsletter.description": "최신 소식과 이벤트 정보를 받아보세요.",
    "footer.newsletter.placeholder": "이메일 주소",
    "footer.newsletter.button": "구독",
    "footer.copyright": "© 2025 해3DAO. All rights reserved.",
  },
  en: {
    // Header
    "nav.vision": "Vision",
    "nav.features": "Features",
    "nav.community": "Community",
    "nav.events": "Events",
    "button.connect": "Connect Wallet",

    // Hero
    "hero.title": "The Waves of Web3 Start from the Sea",
    "hero.description":
      "Hae3DAO is a local community that combines Busan's maritime city identity with Web3 technology philosophy. We aim to be as open and decentralized as the sea, growing from local roots to become a global Web3 hub.",
    "hero.join": "Join Community",
    "hero.learn": "Learn More",

    // Vision
    "vision.title": "Hae3DAO Vision",
    "vision.subtitle": "Local Roots. Global Chains.",
    "vision.card1.title": "Open Community",
    "vision.card1.description":
      "We build a community as open and free as the sea. All participants have equal rights and responsibilities, creating an environment where diverse opinions can coexist.",
    "vision.card2.title": "Decentralized Governance",
    "vision.card2.description":
      "We build a transparent governance system where all members can participate in decision-making through a proposal → vote → execution structure.",
    "vision.card3.title": "Web3 Laboratory",
    "vision.card3.description":
      "Design and execute NFT, token, and on-chain experimental projects. Create real value through locally-based Web3 projects.",

    // Features
    "features.title": "Hae3DAO Features",
    "features.item1.title": "Community-Led Governance",
    "features.item1.description":
      "We operate a transparent governance system where all members participate in decision-making.",
    "features.item2.title": "Local Events",
    "features.item2.description":
      "Strengthen offline networking through meetups, hackathons, and community sessions in Busan.",
    "features.item3.title": "Web3 Experimental Projects",
    "features.item3.description":
      "Provide opportunities to design and execute NFT, token, and on-chain experimental projects.",

    // Video
    "video.title": "🎥 Hae3DAO Introduction Video",
    "video.description": "The video below briefly introduces Hae3DAO's activities.",

    // Community
    "community.title": "Community Activities",
    "community.description": "Participate in Hae3DAO's various community activities.",
    "community.card1.title": "Regular Meetups",
    "community.card1.description": "Share Web3 knowledge and network at monthly meetups in Busan.",
    "community.card2.title": "Hackathons",
    "community.card2.description": "Realize your ideas and form teams at quarterly hackathons.",
    "community.card3.title": "Educational Workshops",
    "community.card3.description": "Build knowledge through educational workshops on Web3 technologies and concepts.",
    "community.button.details": "View Details",
    "community.button.join": "Join Community",

    // Newsletter
    "newsletter.title": "📮 Subscribe to Newsletter",
    "newsletter.description": "Receive Web3 community news.",
    "newsletter.placeholder": "Enter email address",
    "newsletter.button": "Subscribe",

    // Events
    "events.title": "🗓️ Upcoming Events",
    "events.description": "Check Hae3DAO's upcoming event schedule.",
    "events.event1.title": "Hae3DAO Opening Meetup",
    "events.event1.description": "Join the first official meetup in Centum City, Busan.",
    "events.event2.title": "Web3 Community Hackathon",
    "events.event2.description": "A 48-hour hackathon at Busan Startup Hub.",
    "events.event3.title": "Local Partnership Announcement Session",
    "events.event3.description": "Partnership announcements and networking session with Busan local companies.",

    // Language
    "language.title": "🌐 Language Selection",
    "language.description": "언어 선택",
    "language.ko": "Korean",
    "language.en": "English",
    "language.ja": "Japanese",

    // Footer
    "footer.about":
      "Hae3DAO is a local community that combines Busan's maritime city identity with Web3 technology philosophy. We aim to be as open and decentralized as the sea.",
    "footer.links": "Links",
    "footer.resources": "Resources",
    "footer.resources.whitepaper": "Whitepaper",
    "footer.resources.docs": "Documentation",
    "footer.resources.github": "GitHub",
    "footer.resources.faq": "FAQ",
    "footer.newsletter": "Subscribe to Newsletter",
    "footer.newsletter.description": "Receive the latest news and event information.",
    "footer.newsletter.placeholder": "Email address",
    "footer.newsletter.button": "Subscribe",
    "footer.copyright": "© 2025 Hae3DAO. All rights reserved.",
  },
  ja: {
    // Header
    "nav.vision": "ビジョン",
    "nav.features": "特徴",
    "nav.community": "コミュニティ",
    "nav.events": "イベント",
    "button.connect": "ウォレット接続",

    // Hero
    "hero.title": "Web3の波は海から始まる",
    "hero.description":
      "海3DAOは釜山の海洋都市アイデンティティとWeb3技術哲学を組み合わせた地域ベースのコミュニティです。海のようにオープンで分散したコミュニティを目指し、ローカルから始めてグローバルWeb3ハブへと成長することを目標としています。",
    "hero.join": "コミュニティに参加",
    "hero.learn": "詳細を見る",

    // Vision
    "vision.title": "海3DAOのビジョン",
    "vision.subtitle": "Local Roots. Global Chains.",
    "vision.card1.title": "オープンコミュニティ",
    "vision.card1.description":
      "海のようにオープンで自由なコミュニティを構築します。すべての参加者は平等な権利と責任を持ち、多様な意見が共存できる環境を作ります。",
    "vision.card2.title": "分散型ガバナンス",
    "vision.card2.description":
      "提案→投票→実行の構造を通じて、すべてのメンバーが意思決定に参加できる透明なガバナンスシステムを構築します。",
    "vision.card3.title": "Web3実験室",
    "vision.card3.description":
      "NFT、トークン、オンチェーン実験プロジェクトを直接設計し実行します。地域ベースのWeb3プロジェクトを通じて実質的な価値を創出します。",

    // Features
    "features.title": "海3DAOの特徴",
    "features.item1.title": "コミュニティ主導のガバナンス",
    "features.item1.description": "すべてのメンバーが意思決定に参加する透明なガバナンスシステムを運営します。",
    "features.item2.title": "地域ベースのイベント",
    "features.item2.description":
      "釜山で開催されるミートアップ、ハッカソン、コミュニティセッションを通じてオフラインネットワーキングを強化します。",
    "features.item3.title": "Web3実験プロジェクト",
    "features.item3.description": "NFT、トークン、オンチェーン実験プロジェクトを直接設計し実行する機会を提供します。",

    // Video
    "video.title": "🎥 海3DAO紹介ビデオ",
    "video.description": "以下のビデオで海3DAOの活動を簡単に紹介します。",

    // Community
    "community.title": "コミュニティ活動",
    "community.description": "海3DAOの様々なコミュニティ活動に参加してください。",
    "community.card1.title": "定期ミートアップ",
    "community.card1.description": "毎月釜山で開催される定期ミートアップでWeb3知識を共有しネットワーキングできます。",
    "community.card2.title": "ハッカソン",
    "community.card2.description": "四半期ごとに開催されるハッカソンでアイデアを実現しチームを形成してください。",
    "community.card3.title": "教育ワークショップ",
    "community.card3.description": "Web3技術と概念に関する教育ワークショップを通じて知識を積み上げてください。",
    "community.button.details": "詳細を見る",
    "community.button.join": "コミュニティに参加",

    // Newsletter
    "newsletter.title": "📮 ニュースレター購読",
    "newsletter.description": "Web3コミュニティニュースを受け取る。",
    "newsletter.placeholder": "メールアドレスを入力",
    "newsletter.button": "購読",

    // Events
    "events.title": "🗓️ 今後のイベント",
    "events.description": "海3DAOの今後のイベントスケジュールを確認してください。",
    "events.event1.title": "海3DAOオープニングミートアップ",
    "events.event1.description": "釜山センタムシティで開催される最初の公式ミートアップに参加してください。",
    "events.event2.title": "Web3コミュニティハッカソン",
    "events.event2.description": "釜山スタートアップハブで48時間行われるハッカソンです。",
    "events.event3.title": "地域パートナーシップ発表セッション",
    "events.event3.description": "釜山地域企業とのパートナーシップ発表およびネットワーキングセッションです。",

    // Language
    "language.title": "🌐 言語選択",
    "language.description": "言語を選択",
    "language.ko": "韓国語",
    "language.en": "英語",
    "language.ja": "日本語",

    // Footer
    "footer.about":
      "海3DAOは釜山の海洋都市アイデンティティとWeb3技術哲学を組み合わせた地域ベースのコミュニティです。海のようにオープンで分散したコミュニティを目指します。",
    "footer.links": "リンク",
    "footer.resources": "リソース",
    "footer.resources.whitepaper": "ホワイトペーパー",
    "footer.resources.docs": "ドキュメント",
    "footer.resources.github": "GitHub",
    "footer.resources.faq": "FAQ",
    "footer.newsletter": "ニュースレター購読",
    "footer.newsletter.description": "最新ニュースとイベント情報を受け取ってください。",
    "footer.newsletter.placeholder": "メールアドレス",
    "footer.newsletter.button": "購読",
    "footer.copyright": "© 2025 海3DAO. All rights reserved.",
  },
}

const LanguageContext = createContext<LanguageContextType>({
  language: "ko",
  setLanguage: () => {},
  t: () => "",
})

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>("ko")

  // Load language preference from localStorage on client side
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && ["ko", "en", "ja"].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Save language preference to localStorage
  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => useContext(LanguageContext)
