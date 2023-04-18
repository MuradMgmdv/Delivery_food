import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props: any) => (
  <ContentLoader 
    speed={0}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="130" cy="130" r="130" /> 
    <rect x="-38" y="284" rx="10" ry="10" width="348" height="23" /> 
    <rect x="93" y="316" rx="0" ry="0" width="1" height="0" /> 
    <rect x="77" y="354" rx="0" ry="0" width="30" height="1" /> 
    <rect x="66" y="355" rx="0" ry="0" width="20" height="0" /> 
    <rect x="2" y="328" rx="10" ry="10" width="285" height="57" /> 
    <rect x="5" y="404" rx="10" ry="10" width="92" height="26" /> 
    <rect x="163" y="401" rx="19" ry="19" width="122" height="35" />
  </ContentLoader>
)

export default Skeleton