import "./App.css";
import { motion } from "framer-motion";

function App() {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 2, bounce: 0 },
          opacity: { delay, duration: 0.1 },
        },
      };
    },
  };

  return (
    <div className="flex justify-center items-center h-screen bg-white p-5 box-border">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-[#C0C1FF] rounded-[20px] p-[clamp(15px,5vw,30px)] shadow-lg flex justify-center items-center w-full max-w-[500px] aspect-[3/4] mx-auto overflow-hidden"
      >
        <motion.svg
          width="100%"
          height="100%"
          viewBox="0 0 465 347"
          preserveAspectRatio="xMidYMid meet"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="max-w-full max-h-full scale-[0.9]"
          initial="hidden"
          animate="visible"
        >
          <motion.path
            d="M58 9C56.5353 2.40879 36.7444 1.82222 32.7778 2.05556C21.15 2.73954 9.78189 4.87974 4.77778 16C-7.05546 42.2961 22.6422 67.6087 46.2222 72.2222C73.3533 77.5305 89.4314 45.3224 77 23.2222C72.9263 15.98 66.6346 12.6808 59.6667 8.5C55.2522 5.85134 52.2983 6 47 6"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            variants={draw}
            custom={0}
          />
          <motion.path
            d="M26.1111 30.0556C26.736 28.1809 28.7973 29.8664 30 30C32.5024 26.2464 31.816 30.7992 28.0556 32.4444C26.0336 33.3291 25.4621 32.0025 26.1111 30.0556Z"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            variants={draw}
            custom={1}
          />
          <motion.path
            d="M46 21C45.7492 18.9939 44.4279 22.3423 46.2222 23.7778C47.1833 24.5467 50.1152 17.2565 46 20"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            variants={draw}
            custom={2}
          />
          <motion.path
            d="M39 41C42.9841 41.3984 45.8529 44.2831 50.0556 42.4444C55.4547 40.0823 57 38.4244 57 33"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            variants={draw}
            custom={3}
          />
          <motion.path
            d="M38 157C38 155.527 37.1932 148.905 39 149C44.1162 149.269 49.3695 157.814 52.7778 161.222C56.1771 164.622 46.4475 153.73 44.7778 149.222C43.2431 145.079 44.7919 144.579 49 145C51.21 145.221 56.1085 154.77 54.7778 150.778C53.978 148.378 50.4981 144.057 52.7778 141.778C55.3293 139.226 60.3031 149.211 62.7778 151.778C64.5342 153.599 70.0789 154.079 68 152"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            variants={draw}
            custom={4}
          />
          <motion.path
            d="M65 141C67.0919 144.556 76 151.284 76 143C76 138.163 71.4444 124.385 71.4444 129.222C71.4444 132.785 76.9665 138.843 79 141.222C83.3385 146.298 87.7136 151.325 92 156.444C95.0075 160.037 99.8477 163.435 101.778 167.778C104.011 172.802 90.8335 172.032 88 171.778C80.5769 171.111 71.4287 168.365 74 159.222C76.6307 149.868 86.6079 145.147 95 142"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            variants={draw}
            custom={5}
          />
          <motion.path
            d="M94 124C92.7216 123.84 92.567 121.435 94.2222 123.444C98.4372 128.563 102.948 133.292 107.056 138.556C111.329 144.031 116.298 149.268 119.833 155.278C121.609 158.296 113.689 153.676 112 153"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            variants={draw}
            custom={6}
          />
          <motion.path
            d="M97 127C97 122.639 97.1798 118 102.444 118C110.546 118 107.082 130.082 104 127"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            variants={draw}
            custom={7}
          />
          <motion.path
            d="M115 113C115 108.336 111.364 110.362 111 114C110.362 120.379 114.349 121.289 120.222 119.556C123.948 118.456 130.168 110.738 124.222 108.222C121.745 107.174 120.323 106.354 119 109"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            variants={draw}
            custom={8}
          />
          <motion.path
            d="M140 96C136.182 95.5757 134.667 95 132 98C129.441 100.878 131.797 106 135.5 106C140.902 106 146.828 101.243 145.944 95.5C145.231 90.8651 139.299 88.8041 138 94"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            variants={draw}
            custom={9}
          />
          <motion.path
            d="M140 77C144.57 82.0777 146.642 89.6885 151.222 94.7778C154.098 97.9725 153 83.6138 153 81.3333C153 68.7625 150.446 82.8111 152.222 85.5556C153.233 87.1177 166.371 86.7423 166 86"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            variants={draw}
            custom={10}
          />
          <motion.path
            d="M167 69C167.244 70.9547 171.191 78.6174 172 77"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            variants={draw}
            custom={11}
          />
          <motion.path
            d="M164 64C162.52 65.665 163.93 68.1562 164.778 66.5556C165.845 64.5392 164.997 63 163 63"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            variants={draw}
            custom={12}
          />
          <motion.path
            d="M175 65C179.72 65 183.562 64.4716 184.778 59C185.176 57.2102 184.265 54 182 54C179.688 54 178.395 57.3761 177.556 59.0556C168.701 76.7654 194.357 67.3215 201 64"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            variants={draw}
            custom={13}
          />
          <motion.path
            d="M117 185C122.831 190.831 128.85 197.242 132.778 204.556C133.407 205.727 138 212.719 138 212"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            variants={draw}
            custom={14}
          />
          <motion.path
            d="M121 204C124.141 201.208 128.48 199.386 132.167 197.389C133.683 196.567 140.123 193 140 193"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            variants={draw}
            custom={15}
          />
          <motion.path
            d="M142 186C142.313 188.814 148.426 195.135 150.556 196.333C152.216 197.267 149.005 192.841 148 191.222C145.922 187.874 143.766 183.472 144.222 179.444C144.528 176.746 148.912 171.356 152 174.444C154.123 176.567 154.331 183.662 152 179"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            variants={draw}
            custom={16}
          />
          <motion.path
            d="M157 167C157 172.755 163.513 180.026 166 185"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            variants={draw}
            custom={17}
          />
          <motion.path
            d="M156 157C156 157.928 155.71 162.025 156.222 161C157.098 159.249 156 157.343 156 158"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            variants={draw}
            custom={18}
          />
          <motion.path
            d="M178 148C173.879 148.458 169.112 159 176 159C179.084 159 188 154.149 188 157.056C188 159.811 185.97 163 183 163"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            variants={draw}
            custom={19}
          />
          <motion.path
            d="M180 136C184.047 136.506 189.149 149.705 192 152.556C196.991 157.547 196 142.359 196 140.556C196 136.667 207.236 149.086 209.444 149.889C213.194 151.252 221 150.577 221 145"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            variants={draw}
            custom={20}
          />
          <motion.path
            d="M221 119C211.742 117.843 215.077 136.272 223.222 127.222C225.691 124.479 217.314 118.879 222 121.222C224.276 122.36 228.582 122.598 230.889 121.444C233.049 120.365 233.736 117.755 236 117"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            variants={draw}
            custom={21}
          />
          <motion.path
            d="M206 213C206 204.785 212.678 208.906 217.389 211C218.037 211.288 221.421 214.469 219.778 211C218.975 209.305 212.594 200.851 214.222 199.222C215.752 197.692 219.104 200.184 219.944 201.444C221.412 203.646 218.329 196.1 219.056 193.556C219.757 191.102 224.055 194.674 224.667 195.444C227.004 198.388 229.238 202 233 202"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            variants={draw}
            custom={22}
          />
          <motion.path
            d="M231 190C233.759 190 239.568 200.864 241 198"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            variants={draw}
            custom={23}
          />
          <motion.path
            d="M228 179C228 180.112 228 184.342 228 181"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            variants={draw}
            custom={24}
          />
          <motion.path
            d="M245 173C244.586 176.311 242.065 181 248 181C249.217 181 255.889 180.068 255.889 180.556C255.889 182.178 253.08 185.08 252 184"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            variants={draw}
            custom={25}
          />
          <motion.path
            d="M257 162C257 165.315 257.181 171.455 262.5 168.5C263.67 167.85 266.387 167.498 267.444 168.556C268.608 169.72 266 172.845 266 172"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            variants={draw}
            custom={26}
          />
          <motion.path
            d="M273 143C273.449 146.59 285.807 147.09 281 142C277.83 138.643 280.363 142.306 281.778 143.778C286.448 148.635 291.257 153.368 296 158.111C304.041 166.152 297.292 171.139 288.611 164.5C285.236 161.919 282.67 159.134 284.556 154.556C286.177 150.618 291.599 150.802 293 148"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            variants={draw}
            custom={27}
          />
          <motion.path
            d="M294 137C293.68 134.443 292 140.76 292 141.778C292 146.385 293.699 148.081 298.389 145.556C308.928 139.881 300.723 130.639 292 135"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            variants={draw}
            custom={28}
          />
          <motion.path
            d="M302 127C302 136.238 311.378 132.33 309.944 124.444C309.731 123.272 307.157 120.602 308 121.444C309.476 122.92 311.098 124.588 313.056 125.444C319.956 128.463 331.283 121.43 337 118"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            variants={draw}
            custom={29}
          />
          <motion.path
            d="M354 59C343.393 59 339.536 65.9115 336.778 75.2222C333.268 87.0663 351.823 93.3203 360.5 88.5C364.647 86.1964 374.667 82.9993 375 77C375.226 72.9387 373.824 66.1406 370.5 63.5556C368.69 62.1476 365.104 61.1238 363 61C356.647 60.6263 350.297 58.901 344 61"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            variants={draw}
            custom={30}
          />
          <motion.path
            d="M348 73C348.176 74.4076 347.848 74 348 74"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            variants={draw}
            custom={31}
          />
          <motion.path
            d="M355 67C357.268 67.2835 358.963 63.0742 358 65"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            variants={draw}
            custom={32}
          />
          <motion.path
            d="M359 80C359 77.7128 358.105 75 361 75C362.521 75 365 76.0615 365 76"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            variants={draw}
            custom={33}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}

export default App;
