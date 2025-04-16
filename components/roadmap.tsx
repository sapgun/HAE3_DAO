"use client"

import { useState } from "react"
import { ChevronRight, Users, Building, Globe, Wallet, Rocket, Anchor } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function HAE3DAORoadmap() {
  const [activeTab, setActiveTab] = useState("stage1")

  return (
    <div className="container mx-auto py-10 px-4 max-w-5xl">
      <div className="relative mb-16">
        <div className="hidden md:flex justify-between items-center mb-8">
          <div
            className={`flex flex-col items-center cursor-pointer ${activeTab === "stage1" ? "opacity-100" : "opacity-60"}`}
            onClick={() => setActiveTab("stage1")}
          >
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center ${activeTab === "stage1" ? "bg-teal-100 text-teal-700" : "bg-muted"}`}
            >
              <Users className="w-8 h-8" />
            </div>
            <p className="mt-2 font-medium">1단계</p>
            <p className="text-sm text-muted-foreground">로컬 커뮤니티</p>
          </div>

          <div className="w-1/3 h-1 bg-muted relative">
            <div
              className="absolute top-0 left-0 h-full bg-teal-500 transition-all duration-500"
              style={{ width: activeTab === "stage1" ? "0%" : activeTab === "stage2" ? "100%" : "100%" }}
            />
          </div>

          <div
            className={`flex flex-col items-center cursor-pointer ${activeTab === "stage2" ? "opacity-100" : "opacity-60"}`}
            onClick={() => setActiveTab("stage2")}
          >
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center ${activeTab === "stage2" ? "bg-teal-100 text-teal-700" : "bg-muted"}`}
            >
              <Building className="w-8 h-8" />
            </div>
            <p className="mt-2 font-medium">2단계</p>
            <p className="text-sm text-muted-foreground">인프라 확장</p>
          </div>

          <div className="w-1/3 h-1 bg-muted relative">
            <div
              className="absolute top-0 left-0 h-full bg-teal-500 transition-all duration-500"
              style={{ width: activeTab === "stage3" ? "100%" : "0%" }}
            />
          </div>

          <div
            className={`flex flex-col items-center cursor-pointer ${activeTab === "stage3" ? "opacity-100" : "opacity-60"}`}
            onClick={() => setActiveTab("stage3")}
          >
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center ${activeTab === "stage3" ? "bg-teal-100 text-teal-700" : "bg-muted"}`}
            >
              <Globe className="w-8 h-8" />
            </div>
            <p className="mt-2 font-medium">3단계</p>
            <p className="text-sm text-muted-foreground">글로벌 확장</p>
          </div>
        </div>

        <Tabs defaultValue="stage1" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 mb-8 md:hidden">
            <TabsTrigger value="stage1">1단계</TabsTrigger>
            <TabsTrigger value="stage2">2단계</TabsTrigger>
            <TabsTrigger value="stage3">3단계</TabsTrigger>
          </TabsList>

          <TabsContent value="stage1">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl flex items-center">
                      <Users className="mr-2 h-6 w-6 text-teal-600" />
                      로컬 커뮤니티 DAO
                    </CardTitle>
                    <CardDescription className="mt-2">100~500명의 핵심 멤버 중심</CardDescription>
                  </div>
                  <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200">현재 단계</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <Rocket className="mr-2 h-5 w-5 text-teal-600" />
                      핵심 활동
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 mr-2 text-teal-600 shrink-0 mt-0.5" />
                        <span>부산 기반 Web3 커뮤니티 운영 (오프라인 밋업, 해커톤, 스터디 등)</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 mr-2 text-teal-600 shrink-0 mt-0.5" />
                        <span>로컬 브랜드와 협업 (예: 동백전, 해양 관련 ESG 기업 등)</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 mr-2 text-teal-600 shrink-0 mt-0.5" />
                        <span>자체 NFT, 굿즈, 밈코인 등 밈 중심 문화 형성</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <Wallet className="mr-2 h-5 w-5 text-teal-600" />
                      수익 구조
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 mr-2 text-teal-600 shrink-0 mt-0.5" />
                        <span>티켓, DAO NFT, 굿즈 판매</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 mr-2 text-teal-600 shrink-0 mt-0.5" />
                        <span>파트너십을 통한 리워드 수수료</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-teal-50 rounded-lg border border-teal-100">
                  <p className="text-teal-800 font-medium flex items-center">
                    <Anchor className="mr-2 h-5 w-5" />
                    해3DAO는 이 단계에서 '지역 Web3 허브'로 자리잡을 수 있어.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="stage2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Building className="mr-2 h-6 w-6 text-teal-600" />
                  DAO 인프라 및 토크노믹스 확장
                </CardTitle>
                <CardDescription className="mt-2">500~5,000명 (유저 + 빌더 + 프로젝트 팀)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <Rocket className="mr-2 h-5 w-5 text-teal-600" />
                      핵심 활동
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 mr-2 text-teal-600 shrink-0 mt-0.5" />
                        <span>동백Pay X 해3DAO 연계한 크립토 페이먼트/리워드 시스템</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 mr-2 text-teal-600 shrink-0 mt-0.5" />
                        <span>해양 문화, 친환경, 부산시 정책과 연계한 ESG DAO 플랫폼</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 mr-2 text-teal-600 shrink-0 mt-0.5" />
                        <span>Research DAO, Treasury DAO, Edu DAO 같은 하위 DAO 체계화</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <Wallet className="mr-2 h-5 w-5 text-teal-600" />
                      수익 구조
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 mr-2 text-teal-600 shrink-0 mt-0.5" />
                        <span>스마트컨트랙트 기반 로컬 DAO 인프라 제공 수수료</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 mr-2 text-teal-600 shrink-0 mt-0.5" />
                        <span>동백전과 연동된 리워드 운영 및 데이터 기반 광고 모델</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-teal-50 rounded-lg border border-teal-100">
                  <p className="text-teal-800 font-medium flex items-center">
                    <Anchor className="mr-2 h-5 w-5" />이 단계에서 HAE3DAO는 '로컬 DAO 거버넌스 인프라 제공자'로 전환
                    가능.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="stage3">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Globe className="mr-2 h-6 w-6 text-teal-600" />
                  글로벌 확장형 Web3 DAO 모델
                </CardTitle>
                <CardDescription className="mt-2">
                  5,000~50,000명 이상 (글로벌 디지털 노마드 및 해양도시 네트워크까지 확장)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <Rocket className="mr-2 h-5 w-5 text-teal-600" />
                      핵심 활동
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 mr-2 text-teal-600 shrink-0 mt-0.5" />
                        <span>다른 해양 도시(예: 후쿠오카, 제주, 싱가포르 등)와 연계된 DAO 간 네트워크 형성</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 mr-2 text-teal-600 shrink-0 mt-0.5" />
                        <span>글로벌 해양-ESG 펀딩 DAO, 토큰 기반 투표/의사결정 시스템 확장</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 mr-2 text-teal-600 shrink-0 mt-0.5" />
                        <span>HAE3 Launchpad로 Web3 스타트업의 초기 펀딩 및 테스트베드 제공</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <Wallet className="mr-2 h-5 w-5 text-teal-600" />
                      수익 구조
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 mr-2 text-teal-600 shrink-0 mt-0.5" />
                        <span>DAO 런치패드 수수료</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 mr-2 text-teal-600 shrink-0 mt-0.5" />
                        <span>지역 기반 인프라 DAO SaaS 솔루션 라이센싱</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-teal-50 rounded-lg border border-teal-100">
                  <p className="text-teal-800 font-medium flex items-center">
                    <Anchor className="mr-2 h-5 w-5" />이 단계에서는 '글로벌 해양 도시 연합 DAO' 혹은 'Web3 기반
                    지방자치 모델'로까지 확장 가능.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Card className="bg-gradient-to-br from-teal-50 to-blue-50 border-teal-100">
        <CardHeader>
          <CardTitle>결론</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg leading-relaxed">
            HAE3DAO는 지역 Web3 문화 커뮤니티를 넘어, 부산이라는 도시 자체를 DAO화한 "도시 운영의 실험실"로 성장할 수
            있는 포텐셜을 지님. 지금 구상대로라면 초기에는 300~1,000명 규모의 커뮤니티, 중장기적으로는 수천 명 이상의
            네트워크형 DAO까지 발전 가능해.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
