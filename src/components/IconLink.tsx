import { useRouter } from 'next/router'

import { Image, Link } from '@chakra-ui/react'

interface IconLinkProps {
  src: string
  href: string
}

export const IconLink = ({ src, href }: IconLinkProps) => {
  const router = useRouter()

  return (
    <Link
      display="flex"
      alignItems="center"
      justifyContent="center"
      p="2"
      borderRadius=".25rem"
      cursor="pointer"
      transition="0.2s all ease"
      _hover={{
        transform: 'scale(1.06)'
      }}
      href={href}
      isExternal
    >
      <Image src={src} />
    </Link>
  )
}
