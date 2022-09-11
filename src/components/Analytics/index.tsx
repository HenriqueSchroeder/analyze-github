import Script from 'next/script'

/**
 * Component.
 */
export const Analytics = () => {
  /**
   * JSX.
   */
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-KV3XQ9B0RT"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
             
             gtag('config', 'G-KV3XQ9B0RT',{
               page_path: window.location.pathname,
              });
              `}
      </Script>
    </>
  )
}
