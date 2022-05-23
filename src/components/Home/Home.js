import React from 'react'
import "./Home.scss"
import { Link } from 'react-router-dom'
import Typical from 'react-typical'
import file from '../../assets/resume.pdf'


export default function Main() {

    return (
        <div class = "container" >
            {/*  */}
            <div class = "home" >
                <div class = "home-content" >
                    <div className='left'>
                        <div class = "text1" >
                            <p><span>&lt; p &gt;</span>Hi, my name is<span>&lt; /p &gt;</span></p>
                        </div>
                        
                        <div class = "text2" >
                        <span className='tag'>&lt; h1 &gt;</span>
                        <svg id='logo'  width="734" height="229" viewBox="0 0 734 229" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="path-1-outside-1_103_4" maskUnits="userSpaceOnUse" x="0.100006" y="0.199982" width="734" height="229" fill="black">
                            <rect fill="white" x="0.100006" y="0.199982" width="734" height="229"/>
                            <path d="M80.4 221.1C66.6 221.1 54.2 218.7 43.2 213.9C32.4 208.9 23.9 202.1 17.7 193.5C11.5 184.7 8.30001 174.6 8.10001 163.2H37.2C38.2 173 42.2 181.3 49.2 188.1C56.4 194.7 66.8 198 80.4 198C93.4 198 103.6 194.8 111 188.4C118.6 181.8 122.4 173.4 122.4 163.2C122.4 155.2 120.2 148.7 115.8 143.7C111.4 138.7 105.9 134.9 99.3 132.3C92.7 129.7 83.8 126.9 72.6 123.9C58.8 120.3 47.7 116.7 39.3 113.1C31.1 109.5 24 103.9 18 96.3C12.2 88.5 9.30001 78.1 9.30001 65.1C9.30001 53.7 12.2 43.6 18 34.8C23.8 26 31.9 19.2 42.3 14.4C52.9 9.59998 65 7.19998 78.6 7.19998C98.2 7.19998 114.2 12.1 126.6 21.9C139.2 31.7 146.3 44.7 147.9 60.9H117.9C116.9 52.9 112.7 45.9 105.3 39.9C97.9 33.7 88.1 30.6 75.9 30.6C64.5 30.6 55.2 33.6 48 39.6C40.8 45.4 37.2 53.6 37.2 64.2C37.2 71.8 39.3 78 43.5 82.8C47.9 87.6 53.2 91.3 59.4 93.9C65.8 96.3 74.7 99.1 86.1 102.3C99.9 106.1 111 109.9 119.4 113.7C127.8 117.3 135 123 141 130.8C147 138.4 150 148.8 150 162C150 172.2 147.3 181.8 141.9 190.8C136.5 199.8 128.5 207.1 117.9 212.7C107.3 218.3 94.8 221.1 80.4 221.1Z"/>
                            <path d="M340.174 130.5C340.174 135.7 339.874 141.2 339.274 147H207.874C208.874 163.2 214.374 175.9 224.374 185.1C234.574 194.1 246.874 198.6 261.274 198.6C273.074 198.6 282.874 195.9 290.674 190.5C298.674 184.9 304.274 177.5 307.474 168.3H336.874C332.474 184.1 323.674 197 310.474 207C297.274 216.8 280.874 221.7 261.274 221.7C245.674 221.7 231.674 218.2 219.274 211.2C207.074 204.2 197.474 194.3 190.474 181.5C183.474 168.5 179.974 153.5 179.974 136.5C179.974 119.5 183.374 104.6 190.174 91.8C196.974 79 206.474 69.2 218.674 62.4C231.074 55.4 245.274 51.9 261.274 51.9C276.874 51.9 290.674 55.3 302.674 62.1C314.674 68.9 323.874 78.3 330.274 90.3C336.874 102.1 340.174 115.5 340.174 130.5ZM311.974 124.8C311.974 114.4 309.674 105.5 305.074 98.1C300.474 90.5 294.174 84.8 286.174 81C278.374 77 269.674 75 260.074 75C246.274 75 234.474 79.4 224.674 88.2C215.074 97 209.574 109.2 208.174 124.8H311.974Z"/>
                            <path d="M366.009 136.2C366.009 119.4 369.409 104.7 376.209 92.1C383.009 79.3 392.309 69.4 404.109 62.4C416.109 55.4 429.409 51.9 444.009 51.9C458.409 51.9 470.909 55 481.509 61.2C492.109 67.4 500.009 75.2 505.209 84.6V54.6H532.809V219H505.209V188.4C499.809 198 491.709 206 480.909 212.4C470.309 218.6 457.909 221.7 443.709 221.7C429.109 221.7 415.909 218.1 404.109 210.9C392.309 203.7 383.009 193.6 376.209 180.6C369.409 167.6 366.009 152.8 366.009 136.2ZM505.209 136.5C505.209 124.1 502.709 113.3 497.709 104.1C492.709 94.9 485.909 87.9 477.309 83.1C468.909 78.1 459.609 75.6 449.409 75.6C439.209 75.6 429.909 78 421.509 82.8C413.109 87.6 406.409 94.6 401.409 103.8C396.409 113 393.909 123.8 393.909 136.2C393.909 148.8 396.409 159.8 401.409 169.2C406.409 178.4 413.109 185.5 421.509 190.5C429.909 195.3 439.209 197.7 449.409 197.7C459.609 197.7 468.909 195.3 477.309 190.5C485.909 185.5 492.709 178.4 497.709 169.2C502.709 159.8 505.209 148.9 505.209 136.5Z"/>
                            <path d="M659.044 51.6C679.044 51.6 695.244 57.7 707.644 69.9C720.044 81.9 726.244 99.3 726.244 122.1V219H699.244V126C699.244 109.6 695.144 97.1 686.944 88.5C678.744 79.7 667.544 75.3 653.344 75.3C638.944 75.3 627.444 79.8 618.844 88.8C610.444 97.8 606.244 110.9 606.244 128.1V219H578.944V54.6H606.244V78C611.644 69.6 618.944 63.1 628.144 58.5C637.544 53.9 647.844 51.6 659.044 51.6Z"/>
                            </mask>
                            <path d="M80.4 221.1C66.6 221.1 54.2 218.7 43.2 213.9C32.4 208.9 23.9 202.1 17.7 193.5C11.5 184.7 8.30001 174.6 8.10001 163.2H37.2C38.2 173 42.2 181.3 49.2 188.1C56.4 194.7 66.8 198 80.4 198C93.4 198 103.6 194.8 111 188.4C118.6 181.8 122.4 173.4 122.4 163.2C122.4 155.2 120.2 148.7 115.8 143.7C111.4 138.7 105.9 134.9 99.3 132.3C92.7 129.7 83.8 126.9 72.6 123.9C58.8 120.3 47.7 116.7 39.3 113.1C31.1 109.5 24 103.9 18 96.3C12.2 88.5 9.30001 78.1 9.30001 65.1C9.30001 53.7 12.2 43.6 18 34.8C23.8 26 31.9 19.2 42.3 14.4C52.9 9.59998 65 7.19998 78.6 7.19998C98.2 7.19998 114.2 12.1 126.6 21.9C139.2 31.7 146.3 44.7 147.9 60.9H117.9C116.9 52.9 112.7 45.9 105.3 39.9C97.9 33.7 88.1 30.6 75.9 30.6C64.5 30.6 55.2 33.6 48 39.6C40.8 45.4 37.2 53.6 37.2 64.2C37.2 71.8 39.3 78 43.5 82.8C47.9 87.6 53.2 91.3 59.4 93.9C65.8 96.3 74.7 99.1 86.1 102.3C99.9 106.1 111 109.9 119.4 113.7C127.8 117.3 135 123 141 130.8C147 138.4 150 148.8 150 162C150 172.2 147.3 181.8 141.9 190.8C136.5 199.8 128.5 207.1 117.9 212.7C107.3 218.3 94.8 221.1 80.4 221.1Z" stroke="white" stroke-width="14" mask="url(#path-1-outside-1_103_4)"/>
                            <path d="M340.174 130.5C340.174 135.7 339.874 141.2 339.274 147H207.874C208.874 163.2 214.374 175.9 224.374 185.1C234.574 194.1 246.874 198.6 261.274 198.6C273.074 198.6 282.874 195.9 290.674 190.5C298.674 184.9 304.274 177.5 307.474 168.3H336.874C332.474 184.1 323.674 197 310.474 207C297.274 216.8 280.874 221.7 261.274 221.7C245.674 221.7 231.674 218.2 219.274 211.2C207.074 204.2 197.474 194.3 190.474 181.5C183.474 168.5 179.974 153.5 179.974 136.5C179.974 119.5 183.374 104.6 190.174 91.8C196.974 79 206.474 69.2 218.674 62.4C231.074 55.4 245.274 51.9 261.274 51.9C276.874 51.9 290.674 55.3 302.674 62.1C314.674 68.9 323.874 78.3 330.274 90.3C336.874 102.1 340.174 115.5 340.174 130.5ZM311.974 124.8C311.974 114.4 309.674 105.5 305.074 98.1C300.474 90.5 294.174 84.8 286.174 81C278.374 77 269.674 75 260.074 75C246.274 75 234.474 79.4 224.674 88.2C215.074 97 209.574 109.2 208.174 124.8H311.974Z" stroke="white" stroke-width="14" mask="url(#path-1-outside-1_103_4)"/>
                            <path d="M366.009 136.2C366.009 119.4 369.409 104.7 376.209 92.1C383.009 79.3 392.309 69.4 404.109 62.4C416.109 55.4 429.409 51.9 444.009 51.9C458.409 51.9 470.909 55 481.509 61.2C492.109 67.4 500.009 75.2 505.209 84.6V54.6H532.809V219H505.209V188.4C499.809 198 491.709 206 480.909 212.4C470.309 218.6 457.909 221.7 443.709 221.7C429.109 221.7 415.909 218.1 404.109 210.9C392.309 203.7 383.009 193.6 376.209 180.6C369.409 167.6 366.009 152.8 366.009 136.2ZM505.209 136.5C505.209 124.1 502.709 113.3 497.709 104.1C492.709 94.9 485.909 87.9 477.309 83.1C468.909 78.1 459.609 75.6 449.409 75.6C439.209 75.6 429.909 78 421.509 82.8C413.109 87.6 406.409 94.6 401.409 103.8C396.409 113 393.909 123.8 393.909 136.2C393.909 148.8 396.409 159.8 401.409 169.2C406.409 178.4 413.109 185.5 421.509 190.5C429.909 195.3 439.209 197.7 449.409 197.7C459.609 197.7 468.909 195.3 477.309 190.5C485.909 185.5 492.709 178.4 497.709 169.2C502.709 159.8 505.209 148.9 505.209 136.5Z" stroke="white" stroke-width="14" mask="url(#path-1-outside-1_103_4)"/>
                            <path d="M659.044 51.6C679.044 51.6 695.244 57.7 707.644 69.9C720.044 81.9 726.244 99.3 726.244 122.1V219H699.244V126C699.244 109.6 695.144 97.1 686.944 88.5C678.744 79.7 667.544 75.3 653.344 75.3C638.944 75.3 627.444 79.8 618.844 88.8C610.444 97.8 606.244 110.9 606.244 128.1V219H578.944V54.6H606.244V78C611.644 69.6 618.944 63.1 628.144 58.5C637.544 53.9 647.844 51.6 659.044 51.6Z" stroke="white" stroke-width="14" mask="url(#path-1-outside-1_103_4)"/>
                        </svg>
                        
                        <span className='tag'>&lt; /h1 &gt;</span>
                        </div>
                        
                        <div class = "text3" >
                            
                            <p><span className='tag'>&lt; p &gt;</span>I am a 
                                <Typical
                                steps={[
                                'Web Developer', 2000, 
                                'Web Designer', 2000,
                                'Software Developer', 2000
                                ]}
                                loop={Infinity}
                                wrapper="span"
                                /><span className='tag'>&lt; /p &gt;</span>
                            </p>
                        </div>
                        
                    </div>
                    <Link to="/About"><button className='btn'>About me</button></Link>
                    <span> </span>
                    <Link to={file} download target="_blank"><button className='btn'> Download CV</button></Link>
                </div>
            </div>
        </div>
        
    )
}