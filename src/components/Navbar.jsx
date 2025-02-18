import { Button, Navbar } from "flowbite-react";
import { DarkThemeToggle, Flowbite } from "flowbite-react";


export default function CustomNavbar() {
  return (
    <>
     <Flowbite>     <Navbar fluid rounded>
        <Navbar.Brand href="https://flowbite-react.com">
          <img
            src="/vite.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Samyak <br/>Bajracharya
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
        <div className="flex flex-wrap gap-2">
        <DarkThemeToggle />
        <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
  <Button color="blue" pill>
    Resume
  </Button>
</a>


      
   

      
      </div>
    </div>

        <Navbar.Collapse>
          <Navbar.Link href="/" active style={{ color: "red" }}>
            Home
          </Navbar.Link>
          <Navbar.Link href="/projects">Projects</Navbar.Link>
         
          <Navbar.Link href="/contact">Contact</Navbar.Link>
          
          
        </Navbar.Collapse>
      </Navbar>
      </Flowbite>
 
    </>
  );
}