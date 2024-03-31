import React from 'react'
import {BsSearch} from "react-icons/bs";
import {BiUser} from "react-icons/bi";
import {FiHeart} from "react-icons/fi";
import {HiOutlineShoppingBag} from "react-icons/hi";



const HeaderMain = () => {
  return (
    <div className='border-b border-gray-200 py-6'>
        <div className="container sm:flex justify-between items-center">
           <div className='font-bold text-4xl text-center pb-4 sm:pb-0 text-blackish flex justify-center'>
                     <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAABSlBMVEX////GE2+7E2uwEmejEmG0EmjBEm2ZEl6qEmXVE3YAAACWEl3PE3TjFHynEmSJEViQEFrsFH/58fjs7OxycnKmpqbY2NjahrHkhrS3t7d9fX3e3t729vb//P/nAHTOzs6bm5shISEyMjIoKChRUVHMh6t0EE7CwsKKiooQEBA7OzvOAGpCQkJZWVl7AEatAFq+AGNbAENYFUDJQYD34vDCjqfZtMjLr77IuMPhwdHowtq0S362M3XOcZ3kqcjWk7fOfJ/LV42VAEq9YYvPMXvmoMXvz+C8f5qmNm69dJrLnrfFAF7k09ukSnm0AFSAAECgV36LLmFqADiPP2z2vttrGUXscKusaYltPU7WPYzUaKG7lqewg5eodIuQUnKokZyVc4GCYHR+WmOSYHpoMlOCOFpIACYvAABwAC9zTGFOFjHpVJjqO4+XR2bv6RIcAAALDUlEQVR4nO2b+1fa2BaAw1OJIjYhqSEJgYCGN0yJPEREQFExivbl1MfY94y3nf//13tOIBAg2HYczeHe83W1S0PW6v7Y++yzEwJBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDIYgRNHuCP4dxK312jagvqPaHcpDoRqL+ULakV72+Y4L9fnW6Wyfep3btd3d3WbR4Us7dii7I/rnVFteT7vUzwe1Vd/zHTfm1qbj9mybciFuFX3H+zbG8xDUmsddGjvSafoKWzZF8zDEg5VWaeJYp+grzmWhVQ9bR1MHdxzphg2xPBTqwO2eToLYnMvUdGqtTYvDW8fLO08ey4PpLvUs90jncv2pQ3kw1EGrbVlPjeNi56mDeSjaSa9kOV2qp465q7PK6uqMBHiWd580kocjdnsnvPVL7cLlnPUz6rp3NCPkRqE5Z9MzfdHbnCFTOp23DsCfzVj/YAMq7E1OOYijnedmRUzlnXPWzrTzQHXGS5TXO2fjmZYLaJYviISwXZg3mZfn1jIEITTz608ay4Opvnw1U6Y2DzKUiQqQoWZQy++af7U7bGsa60OetzfOj/o/TbC29nzbU1wzgeYOmh9SKLg3AuBfQHoMny8c9ntdjvCIYyR3UKrlcXkAToh7Y8PlgCzr+Eb4/U6Xw+/3PxsQfm134FZ0Wi5dxjOU8fZ1HGYdv29SZh/F+9BbQMZl5OZw47zm9fZt9PSMMlMsLjr9/qFOeA1FmW5+0eUa+BS7b96Umg6TzNAm3TlxX74Nj2yQvCC4cA1lnM3S77+X2t5hbkw26c6Zu7EWHuXmHYoyJ4uLi0ZmXOuquuP0jhXawMZ/qVb3l/3+oY0Pxd58uGKy8dRqTq9zJGPOzV7T5/ePbMII9maqtTJmo3do77jOsKP5zDII3n3WgIzJxqXreK1tfGabMIIfDJQGMrqOx5wbi0oz24TX7A59mk232923mao0s820zrOm3aFPc7RgbeP9YW7eobdrnrjduo1lF3BYrpuBThq5jUY8dFvZeCZyM15qfZlj5DYa9XBhYULGstIsSi2N3M2aKpAxdIyeNmpqZpvxsRPKINebywuGzM/0tLHUhJH7wGbTvfQjG6/FqoEyz4p2Bz/JzcKSOTdjC+deG+BTsDv4SS4WliZtXD/XoUE7Q6w3U2erS+M2Y11gwmai0tKI9WbtbygzZXNvbkYXn4jNzdrJqqXN4uR+Y9nUELv3XD4HLsNKm9g+h7egvCOdsVtQl3aHP85VYLWfmh9XmsVdjnd2hz/ONZQx2Uzm5v4Z2mt3+GOIN7mhzI/XzZSNA6neTH0KBCZy8zNXBMa6cSB1T0P7eyAz28ZjtW4GyUHr2aDKq0CgrzNdacNZwDV76kRqbi6fBwybH/Q0j+Us8NxuATPl3EjmJzr0VKG17RYwczWQsbJZmWFj0kHq6UDq2pD5QRfo31afTk4RoVGTvtkIBMw6U5vnlM1Ybhx7CPVm7Y/AuMx0pU31tDEblJ6m0V4FrGxGuQE+984CDoTm5kruZW7EZINemN3ThjK7diuM0K6uyjpXm9c3F2fnuV6v77OwMNGiZ83QyN2g0REpite00tXByWqvt2S+y+Gevj04kmki0ZsprXJ7+/7Dh4+QD58+XV9dVXgKStFa9+AcClnsnq7JdWP7k45C5fbD3efPL178prNh8ObLly+frsuaCE5RSweHrd6UjWd8svE6irOeTnsStNvfv379bYwNE4FArrfx6qYKq4cqX+RaoA+srECdlfFPo6AM+GtbbxYF7cPXP7/qCXlh8NvGS5OO0aV7fwUudCG12z4H6VnUl810h/Z6bbkIEGnp/Ys/X3z+fPfx4/v3t+VKn9ur6/d3d3df3ozbwJ7W++t8vUQJBFXtXtS2V9wDG4/LnBuHDY+giVrl7j93H9/fVioWD4pRVKV8e/PHlw2w65hHm4WF1sJJo6pRoqoLLbrzUx16d+rjM5F61E/UKOUWJKOi3dtGRbVSvv70KpAbzQJ6P2u1Do+6QIgCQuvt2mI+nzdkgE1h8lsQVGdnS3g8FVqqVLj7RQxEWitfnwVyZhlA3u2uHW2WQIYordrdPAI5Mh5QO62ZR01gUm8+5tcgBYqd8XC/NWAD6l7kemaZFbBW8nlXs37QrarASNW0aqnb1Z8XbBgbDaVuNd5+S7/tIPOxrUBrmgqFumerOWMIgKOzvlTyeed2rb3b2AFKYGGIOnDJqZ39tbffvvvD318jMREMEGGllfs+J3AKMDIz+tjW4XDuFYvNZr1e393drdeb3759/64/f7K8b/c8MI1AlT/dwAeCqe7SX60V/TLAsIEPCQ3uAKTNDziEn4X9++ojrvyHoF7n9F2TujpruceuZ0Z30E0fCD5zFF+D6UJDZr1MIFb/OAdjjUhQWwcnh4vDZ4Sc/cw4TC7+4rpKiJ0GQtfQ06ibf5+A/AhgD+rutmvbMDneglFmvjT8gv1e8XIfSKiv15D/LjdVvTk5PCjBXUpUS2CLabebzaJOs9m8rK/vbIE1D5rZZd3W8flngRcD7vZmqb/tgjasap1Op6qpmj4YUZ3Xjct3z6uorpZJKA36HLbXu6WqqhrFBPZOtbrz/LK4d7mDzkb5M8Axpu1uucGeWa/3vxwANpiio+Ct73RQXysWgLlsa+cIDJqnp6dwLDstFJuNLfVxR+THRBQpuGj6UNRIZG6NMBjM/yOIDvgDaJb+hbMjQQZBHZ5JJCI8eKe5TOQXbEgy/ks3E54EKSOTZCylEAJDhn5BRglxjxfUP4QOJrOKkkrKAvFrMijCy1HwDiuZjKTLJFJyUDeiQyk5zsATglGazcoZuELAaaAY5awEjidSCULKyrQUl+N6joSEnAryXCZh3zvCp5KD/x2UWTCTlGNJGawFLkbKqRiZpQk2TjJkTI7BtHHRWISU5SgJLINkiJDiyUg0JkeTEWCfSoKf4iEyaJ+MkIiSWY4XoEwyGmTpSFROAINklmMjcjJB8NlYMiEpQZnkgIwsMxKXjUVpIpiEMrEYB3KTzPJEKBaDp0VjNsoQdCIeJeUEDzOThf0pGw3BqOGP8AifTQbhaUEyIYDMwIqS4kCsL0Pqv5NxSTBOS9opA2JhQjEyQxsNIAGiivSLhU9mJD5OKvAsUIQ0kIF7ixAkI4YMOzgNVKNknGafCoRmYtHIbJlhlKjL0IkQfOOjcsgsw1iVWQiWGWxw5jLTZaIZWGYhwu4yA0FmFYGbyAybhQ0gkYINIB6L6g0gqTeAFMOaG0BfJpZRCLD0E6wSjNnaAKQYmQJDQGa4aSZIkAlO1ltzcNCa5VS035rlCJkyt+ZBmYEBgk6Rcga0ZnsbAJ9IkbGEALpZTN9xEqmQfhQ0BQ6sED5LslKGzDDgNSAjMHIyDgszBDZNNhjVZVJwGxUSSSBifwO4DyAjGT8PGoAlQv+V/w2ZIEkCHzZLRhC8MjAwWjPkPhkwNGQYJp5MsU8T1z+CHZOJzn7blWyMJKNxDuHEEDTHDBcBy9x3dclzTIRBJi/CaOkKvHB/WDTCy1yHZWhaUXhB4VgBbKQEqygEr0hwouYUFsxwNKFIPC3BIyyj0LQE/jKCwEkIlhYvERzNcwLDS0AmQnC8xCscrCxWAX9YmiPALCAoCtx+JF5iOXC6ArwkZIprBM3wfIQBMgyIWEgAM5aXGNhq6QhIBJNgiQiIn4O3P4CawnMRGrwBdAKdlTIOrClJUiaPKsYhy4JCsMqG0MpUdKxkdSIGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8Fg5pf/ArZhyCZg9nikAAAAAElFTkSuQmCC" alt="" />
          </div>
          <div className='w-full sm:w-[300px] md:w[70%] relative'>
               <input type="text" className='border-gray-200 border p-2 px-4 rounded-lg w-full' placeholder='Enter any product name...' />
            <BsSearch className='absolute right-0 top-0 mr-3 mt-3 text-gray-400 cursor-pointer' size={20}></BsSearch>
          </div>
          <div className="hidden lg:flex gap-4 text-gray-500 text-[30px]">
        <BiUser className="cursor-pointer"></BiUser>
        <div className="relative cursor-pointer">
            <FiHeart></FiHeart>
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
               0
            </div>
        </div>

        <div className="relative cursor-pointer">
            <HiOutlineShoppingBag />
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
               0
            </div>
        </div>

          </div>
        </div>
    </div>
  )
}

export default HeaderMain