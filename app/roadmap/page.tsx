import HAE3DAORoadmap from "../../components/roadmap"

export default function RoadmapPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="pt-20 pb-16">
        <h1 className="text-4xl font-bold text-center mb-2">해3DAO 로드맵</h1>
        <p className="text-xl text-center text-muted-foreground mb-12">Local Roots. Global Chains.</p>
        <HAE3DAORoadmap />
      </div>
    </main>
  )
}
