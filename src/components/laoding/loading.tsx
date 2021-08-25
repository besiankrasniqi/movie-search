import React from "react"

interface Props {
    show: boolean
}

const Loading = ({show = false} : Props) => {
    return (
        <>
            <div className="row text-center">
                <div className="col-md-12">
                    {show ?
                        ( <svg
                            width={100}
                            height={100}
                            viewBox="0 0 38 38"
                            xmlns="http://www.w3.org/2000/svg"
                        
                          >
                            <defs>
                              <linearGradient
                                x1="8.042%"
                                y1="0%"
                                x2="65.682%"
                                y2="23.865%"
                                id="prefix__a"
                              >
                                <stop stopColor="#6c757d" stopOpacity={0} offset="0%" />
                                <stop stopColor="#6c757d" stopOpacity={0.631} offset="63.146%" />
                                <stop stopColor="#6c757d" offset="100%" />
                              </linearGradient>
                            </defs>
                            <g transform="translate(1 1)" fill="none" fillRule="evenodd">
                              <path
                                d="M36 18c0-9.94-8.06-18-18-18"
                                stroke="url(#prefix__a)"
                                strokeWidth={2}
                              >
                                <animateTransform
                                  attributeName="transform"
                                  type="rotate"
                                  from="0 18 18"
                                  to="360 18 18"
                                  dur="0.9s"
                                  repeatCount="indefinite"
                                />
                              </path>
                              <circle fill="#fff" cx={36} cy={18} r={1}>
                                <animateTransform
                                  attributeName="transform"
                                  type="rotate"
                                  from="0 18 18"
                                  to="360 18 18"
                                  dur="0.9s"
                                  repeatCount="indefinite"
                                />
                              </circle>
                            </g>
                          </svg>)
                        : null
                    }
                </div>
            </div>
        </>
    )
}

export default Loading