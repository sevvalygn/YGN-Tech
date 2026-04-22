"use client"

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Navbar as BSNavbar, Nav, Container, Button, Form } from 'react-bootstrap'

type NavItem = { path: string; label: string }

const navItems: NavItem[] = [
  { path: '/', label: 'Anasayfa' },
  { path: '/hakkimizda', label: 'Hakkımızda' },
  { path: '/hizmetler', label: 'Hizmetler' },
  { path: '/onarim-fiyati-sorgulama', label: 'Onarım Fiyatı Sorgulama' },
  { path: '/cihaz-sorgulama', label: 'Cihaz Sorgulama' },
  { path: '/iletisim', label: 'İletişim' },
]

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('')
  const pathname = usePathname() || '/'

  const activeKey = useMemo(() => {
    const match = navItems.find((i) => i.path === pathname)
    return match?.path ?? pathname
  }, [pathname])

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // eslint-disable-next-line no-console
      console.log('Arama:', searchQuery)
    }
  }

  return (
    <BSNavbar expand="lg" className="navbar-custom">
      <Container fluid>
        <BSNavbar.Brand as={Link} href="/">
          YGN Tech
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="navbarSupportedContent" aria-label="Menüyü aç/kapat" />
        <BSNavbar.Collapse
          id="navbarSupportedContent"
          className="d-flex flex-column flex-lg-row justify-content-lg-between align-items-center w-100"
        >
          <Nav
            className="d-flex flex-column flex-lg-row justify-content-center align-items-center flex-grow-1 gap-2 gap-lg-3 mb-2 mb-lg-0"
            activeKey={activeKey}
          >
            {navItems.map(({ path, label }) => (
              <Nav.Link key={path} as={Link} href={path} eventKey={path} className="px-2 px-lg-3 py-1">
                {label}
              </Nav.Link>
            ))}
          </Nav>
          <Form className="d-flex ms-lg-2" role="search" onSubmit={handleSearch}>
            <Form.Control
              type="search"
              placeholder="Ara..."
              aria-label="Ara"
              className="me-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.currentTarget.value)}
            />
            <Button variant="outline-success" type="submit">
              Ara
            </Button>
          </Form>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  )
}

