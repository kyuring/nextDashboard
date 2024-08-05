import '@/app/ui/global.css';
import {inter} from '@/app/ui/fonts';
// 루트 레이아웃으로 여기에 추가하는 것은 모든곳에 다 적용됨
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
//antialiased :글꼴을 매끈하게 하는 클래스
