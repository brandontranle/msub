const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="flex-row">
        <div className="desktop-menu">
          <a href="#about">About</a>
          <a href="#team">Team</a>
          <a href="#program">Program</a>
          <a href="#history">History</a>
          <a href="/resources">Resources</a>
        </div>
        <div className="social-media-row">
          <a href="instagram.com" className="social-media-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="50px"
              height="50px"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                  fill="#ffffff"
                ></path>{" "}
                <path
                  d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                  fill="#ffffff"
                ></path>{" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
                  fill="#ffffff"
                ></path>{" "}
              </g>
            </svg>
          </a>
          <a href="mpc.edu" className="social-media-icon">
            <svg
              width="100px"
              height="50px"
              viewBox="0 0 380 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M262 97.6289C267.74 102.961 271.393 109.653 274 117C270.686 115.824 267.726 114.308 264.687 112.563C252.386 105.624 241.262 104.676 227.719 108.426C213.846 112.749 200.918 120.491 188.125 127.25C164.699 139.608 138.055 150.797 111.312 143.313C97.1229 138.548 85.2681 128.991 78.2656 115.711C73.8251 106.524 73.8251 106.525 74.9999 103C75.6896 103.508 76.3792 104.016 77.0898 104.539C80.0496 106.707 83.0231 108.855 85.9999 111C86.7747 111.57 87.5494 112.14 88.3476 112.727C93.8775 116.641 99.5339 119.014 106 121C106.612 121.195 107.225 121.389 107.855 121.59C128.822 125.6 149.475 115.41 167.856 106.535C233.874 74.7216 233.874 74.7216 262 97.6289Z"
                fill="#802142"
              />
              <path
                d="M220.375 46.9375C221.933 48.2723 223.476 49.6257 225 51C225.684 51.5917 226.369 52.1834 227.074 52.793C233.636 58.8387 240.158 67.4729 243 76C225.457 77.8087 225.457 77.8087 220.055 73.832C218.629 71.9248 217.272 69.9643 215.984 67.961C209.606 58.4431 197.44 53.6344 186.75 50.6875C171.088 47.7314 155.522 50.6016 142 59C132.71 66.0574 125.819 74.3576 121.141 85.0313C120 87 120 87 117 88C111.612 88.4413 107.056 88.0743 102 86C106.152 68.1276 118.443 52.7833 133.696 42.9014C160.445 26.3918 195.316 27.4643 220.375 46.9375Z"
                fill="#BBC7D3"
              />
              <path
                d="M245 135C244.405 139.405 242.694 142.885 240.5 146.688C240.145 147.303 239.791 147.918 239.426 148.551C235.961 154.366 231.824 159.251 227 164C226.291 164.708 225.582 165.415 224.852 166.145C208.81 181.288 189.71 185.625 168.348 185.238C148.454 184.535 130.234 174.059 116.812 159.688C114.269 156.841 112.585 154.815 112 151C112.973 151.162 113.946 151.325 114.949 151.492C117.744 151.895 120.447 152.061 123.27 152.07C131.902 152.134 137.666 152.375 144.496 158.148C155.157 166.032 170.199 167.238 183 166C193.019 164.24 201.866 160.09 210 154C211.201 153.151 211.201 153.151 212.426 152.285C214.759 150.214 215.973 148.568 217.645 146C221.324 140.923 225.831 139.666 231.688 138C232.637 137.702 233.586 137.404 234.564 137.098C241.394 135 241.394 135 245 135Z"
                fill="#812343"
              />
              <path
                d="M193.812 74.8125C195.109 74.7941 195.109 74.7941 196.432 74.7754C201.967 74.7628 206.687 75.4388 212 77C209.269 78.8204 207.969 79.3837 204.895 80.043C204.085 80.2254 203.275 80.4079 202.441 80.5959C201.14 80.8888 201.14 80.8888 199.812 81.1875C188.02 84.0154 177.833 88.6382 166.977 93.9414C127.265 113.301 127.265 113.301 109.25 107.437C104.002 105.308 99.7196 102.287 96 98C95.67 97.01 95.34 96.02 95 95C95.5917 95.2049 96.1834 95.4099 96.793 95.6211C115.101 101.863 129.167 96.5312 146.086 88.6289C156.889 83.6028 167.446 79.0183 179 76C179.766 75.7989 180.531 75.5978 181.32 75.3906C185.479 74.7844 189.615 74.8156 193.812 74.8125Z"
                fill="#BCC8D3"
              />
              <path
                d="M262 122C264.966 124.612 266.738 127.214 268 131C267.175 130.711 266.35 130.422 265.5 130.125C264.345 129.754 263.19 129.382 262 129C260.804 128.608 259.607 128.216 258.375 127.812C244.419 124.547 229.738 131.457 217 136.562C206.274 140.857 195.503 143.705 184 145C184 144.34 184 143.68 184 143C184.577 142.714 185.155 142.428 185.75 142.133C188.48 140.779 191.209 139.421 193.938 138.062C194.936 137.566 195.935 137.07 196.965 136.558C202.355 133.867 207.689 131.108 212.97 128.209C227.598 120.196 246.265 112.729 262 122Z"
                fill="#8B3451"
              />
              <path
                d="M193 141C192.67 141.99 192.34 142.98 192 144C189.36 144.33 186.72 144.66 184 145C184 144.34 184 143.68 184 143C189.625 139.875 189.625 139.875 193 141Z"
                fill="#A46077"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className="horizontal-line"></div>
      <div className="flex-row">
        <div className="flex-menu">
          <a id="terms-of-use"> Terms of Use </a>
          <a id="copyright">
            © 2023 MPC Math-Science Upward Bound. All rights reserved{" "}
          </a>
          <a id="privacy"> Privacy Policy </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
