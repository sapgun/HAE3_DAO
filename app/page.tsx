import RoadmapSection from "@/components/roadmap-section"

// 기존 페이지 코드에 로드맵 섹션 추가
// 비전 섹션 바로 아래에 로드맵 섹션을 배치합니다

export default function Home() {
  return (
    <>
      {/* 기존 Hero 섹션 */}
      <section className="hero-section">{/* 기존 Hero 내용 */}</section>

      {/* 기존 비전 섹션 */}
      <section className="vision-section">
        <div className="container mx-auto py-20">
          <h2 className="text-center text-3xl font-bold mb-10">해3DAO의 비전</h2>
          <p className="text-center text-xl mb-10">Local Roots. Global Chains.</p>
          {/* 기존 비전 내용 */}
        </div>
      </section>

      {/* 새로 추가된 로드맵 섹션 */}
      <RoadmapSection />

      {/* 기존 특징 섹션 및 기타 섹션들 */}
    </>
  )
}
