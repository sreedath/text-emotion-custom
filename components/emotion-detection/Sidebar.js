import React from 'react'
import Link from 'next/link'
export default function Sidebar() {
  return (
    <div>
        <div className="base">
            <div className="text-center">
                <img id="logo" style={{width:'40px',height:'40px'}}  src="/images/VizLogo.gif" alt="VizLogo" srcSet=""/>
            </div>
            <h3 className="text-white text-center mt-3">Vizuara</h3>
            <hr className="border-light"/>
            <nav className="nav flex-column text-center">
                <Link href='/emotion-detection/about' className="nav-link "> Introduction</Link>
                <Link href='/emotion-detection/dataset' className="nav-link">Dataset</Link>
                <Link href='/emotion-detection/train' className="nav-link">Train-Model</Link>
                <Link href='/emotion-detection/predict' className="nav-link">Predict</Link>
                <Link href='/emotion-detection/conclusion' className="nav-link">Conclusion</Link>
            </nav>
        </div>
    </div>
  )
}
