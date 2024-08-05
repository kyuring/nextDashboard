import {Inter, Lusitana} from 'next/font/google'

// Inter에서 글꼴을 가져오기
export const inter = Inter({subsets:['latin']});
export const lusitana = Lusitana({
    weight : ['400', '700'],
    subsets : ['latin']
})