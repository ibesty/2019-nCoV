import React from 'react'
import dayjs from 'dayjs'
import Timeline from 'rsuite/lib/Timeline'
import 'rsuite/lib/Timeline/styles'

import styles from './index.module.scss'

export default ({ news = [] }) => {
  return (
    <div className={styles['timeline-wrapper']}>
      <Timeline>
        {
          news.map(item => (
            <Timeline.Item key={item.timestamp} dot={<div className={styles['dot']}></div>}>{dayjs(item.timestamp * 1000).format('YYYY年MM月DD日')} {item.message}</Timeline.Item>
          ))
        }
      </Timeline>
    </div>
  )
}