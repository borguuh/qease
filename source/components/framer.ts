export const mIni = {
  opacity: 0,
  y: 20
}
export const mAni = {
  opacity: 1,
  y: 0
}

export const mTrans = (delay = 0) => ({
  delay: delay,
  duration: 0.5
})

export const vList = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      delay: 0.8
    },
  },
  hidden: {
    opacity: 1,
    transition: {
      when: "afterChildren",
    },
  },
}

export const variant = {
	visible: (i: number) => ({
		y: 0,
		opacity: 1,
		transition: {
			delay: i * 0.2,
		},
	}),
	hidden: { y: 2, opacity: 0, },
}