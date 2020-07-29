import React from "react"
import PageLayout from "../templates/page-layout"
import { Button } from "antd"
import Header from "../components/header"

export default function Home() {
  return (
    <PageLayout showHeader={true}>
      Hey there

      <Button type='primary'>Hello</Button>
    </PageLayout>
  )
}
