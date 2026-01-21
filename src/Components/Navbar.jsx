'use client';

// import { useSession } from 'next-auth/react';
import Link from 'next/link';
// import { Button } from '@/components/ui/button';
import { LogOut, Plus, Package } from 'lucide-react';
// import { logout } from '@/app/actions/auth';

export function Navbar() {
  // const { data: session } = useSession();

  return (
    <nav className="bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Home Link */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
              <Package className="w-6 h-6" />
              <span>ShopHub</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition">
              Home
            </Link>
            <Link href="/items" className="text-foreground hover:text-primary transition">
              Products
            </Link>
            {/* {session && (
              <Link href="/add-item" className="text-foreground hover:text-primary transition flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Add Product
              </Link>
            )} */}
          </div>

          {/* Auth Section */}

          <div>
            {/* <Button size="sm">Sign In</Button> */}
            <button className='btn text-blue-200'>Sing IN</button>
          </div>


          {/* <div className="flex items-center gap-4">
            {session ? (
              <>
                <div className="text-sm text-muted-foreground">
                  {session.user?.email}
                </div>
                <form action={logout}>
                  <Button
                    type="submit"
                    variant="outline"
                    size="sm"
                    className="gap-2 bg-transparent"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </Button>
                </form>
              </>
            ) : (
              <Link href="/login">
                <Button size="sm">Sign In</Button>
              </Link>
            )}
          </div> */}
        </div>
      </div>
    </nav>
  );
}
