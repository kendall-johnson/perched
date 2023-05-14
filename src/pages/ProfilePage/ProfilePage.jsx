import React from 'react'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import SkillCard from '../../components/SkillCard/SkillCard'
import Footer from '../../components/Footer/Footer'

export default function ProfilePage({ user }) {
  return (
    <>
        <ProfileCard user={user}/>
        <SkillCard user={user}/>
        <Footer />
    </>
  )
}
