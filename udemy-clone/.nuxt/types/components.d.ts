
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T

interface _GlobalComponents {
  'Course': typeof import("../../components/Course.vue").default
  'CourseCard': typeof import("../../components/CourseCard.vue").default
  'CourseContent': typeof import("../../components/CourseContent.vue").default
  'CourseDescription': typeof import("../../components/CourseDescription.vue").default
  'CourseInfo': typeof import("../../components/CourseInfo.vue").default
  'CourseItem': typeof import("../../components/CourseItem.vue").default
  'CourseRate': typeof import("../../components/CourseRate.vue").default
  'DetailTopHeadDesc': typeof import("../../components/DetailTopHeadDesc.vue").default
  'Footer': typeof import("../../components/Footer.vue").default
  'Header': typeof import("../../components/Header.vue").default
  'InstructorSection': typeof import("../../components/InstructorSection.vue").default
  'MoreCourse': typeof import("../../components/MoreCourse.vue").default
  'PriceCard': typeof import("../../components/PriceCard.vue").default
  'Programmer': typeof import("../../components/Programmer.vue").default
  'StudentBuy': typeof import("../../components/StudentBuy.vue").default
  'TeachertDesc': typeof import("../../components/TeachertDesc.vue").default
  'WhatYoullLearn': typeof import("../../components/WhatYoullLearn.vue").default
  'NuxtWelcome': typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue").default
  'NuxtLayout': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout").default
  'NuxtErrorBoundary': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue").default
  'ClientOnly': typeof import("../../node_modules/nuxt/dist/app/components/client-only").default
  'DevOnly': typeof import("../../node_modules/nuxt/dist/app/components/dev-only").default
  'ServerPlaceholder': typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder").default
  'NuxtLink': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link").default
  'NuxtLoadingIndicator': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator").default
  'NuxtTime': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue").default
  'NuxtRouteAnnouncer': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer").default
  'NuxtImg': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtImg
  'NuxtPicture': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtPicture
  'NuxtPage': typeof import("../../node_modules/nuxt/dist/pages/runtime/page").default
  'NoScript': typeof import("../../node_modules/nuxt/dist/head/runtime/components").NoScript
  'Link': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Link
  'Base': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Base
  'Title': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Title
  'Meta': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Meta
  'Style': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Style
  'Head': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Head
  'Html': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Html
  'Body': typeof import("../../node_modules/nuxt/dist/head/runtime/components").Body
  'NuxtIsland': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island").default
  'LazyCourse': LazyComponent<typeof import("../../components/Course.vue").default>
  'LazyCourseCard': LazyComponent<typeof import("../../components/CourseCard.vue").default>
  'LazyCourseContent': LazyComponent<typeof import("../../components/CourseContent.vue").default>
  'LazyCourseDescription': LazyComponent<typeof import("../../components/CourseDescription.vue").default>
  'LazyCourseInfo': LazyComponent<typeof import("../../components/CourseInfo.vue").default>
  'LazyCourseItem': LazyComponent<typeof import("../../components/CourseItem.vue").default>
  'LazyCourseRate': LazyComponent<typeof import("../../components/CourseRate.vue").default>
  'LazyDetailTopHeadDesc': LazyComponent<typeof import("../../components/DetailTopHeadDesc.vue").default>
  'LazyFooter': LazyComponent<typeof import("../../components/Footer.vue").default>
  'LazyHeader': LazyComponent<typeof import("../../components/Header.vue").default>
  'LazyInstructorSection': LazyComponent<typeof import("../../components/InstructorSection.vue").default>
  'LazyMoreCourse': LazyComponent<typeof import("../../components/MoreCourse.vue").default>
  'LazyPriceCard': LazyComponent<typeof import("../../components/PriceCard.vue").default>
  'LazyProgrammer': LazyComponent<typeof import("../../components/Programmer.vue").default>
  'LazyStudentBuy': LazyComponent<typeof import("../../components/StudentBuy.vue").default>
  'LazyTeachertDesc': LazyComponent<typeof import("../../components/TeachertDesc.vue").default>
  'LazyWhatYoullLearn': LazyComponent<typeof import("../../components/WhatYoullLearn.vue").default>
  'LazyNuxtWelcome': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue").default>
  'LazyNuxtLayout': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout").default>
  'LazyNuxtErrorBoundary': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue").default>
  'LazyClientOnly': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/client-only").default>
  'LazyDevOnly': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/dev-only").default>
  'LazyServerPlaceholder': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder").default>
  'LazyNuxtLink': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link").default>
  'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator").default>
  'LazyNuxtTime': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue").default>
  'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer").default>
  'LazyNuxtImg': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtImg>
  'LazyNuxtPicture': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs").NuxtPicture>
  'LazyNuxtPage': LazyComponent<typeof import("../../node_modules/nuxt/dist/pages/runtime/page").default>
  'LazyNoScript': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").NoScript>
  'LazyLink': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Link>
  'LazyBase': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Base>
  'LazyTitle': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Title>
  'LazyMeta': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Meta>
  'LazyStyle': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Style>
  'LazyHead': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Head>
  'LazyHtml': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Html>
  'LazyBody': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components").Body>
  'LazyNuxtIsland': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island").default>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
