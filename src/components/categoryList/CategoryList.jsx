import React from 'react'
import styles from "./categoryList.module.css"
import Link from 'next/link'
import Image from 'next/image'

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        
          <Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`}>
            <Image src='/style.png' alt='Style category' width={32} height={32} className={styles.images}/>
            styles
          </Link>

          <Link href="/blog?cat=fashion" className={`${styles.category} ${styles.fashion}`}>
            <Image src='/fashion.png' alt='fashion' width={32} height={32} className={styles.images}/>
            fashion
          </Link>

          <Link href="/blog?cat=food" className={`${styles.category} ${styles.food}`}>
            <Image src='/food.png' alt='food' width={32} height={32} className={styles.images}/>
            food
          </Link>

          <Link href="/blog?cat=travel" className={`${styles.category} ${styles.travel}`}>
            <Image src='/travel.png' alt='travel' width={32} height={32} className={styles.images}/>
            travel
          </Link>

          <Link href="/blog?cat=culture" className={`${styles.category} ${styles.culture}`}>
            <Image src='/culture.png' alt='culture' width={32} height={32} className={styles.images}/>
            culture
          </Link>

          <Link href="/blog?cat=coding" className={`${styles.category} ${styles.coding}`}>
            <Image src='/coding.png' alt='coding' width={32} height={32} className={styles.images}/>
            coding
          </Link>
      </div>
    </div>
  )
}

export default CategoryList
