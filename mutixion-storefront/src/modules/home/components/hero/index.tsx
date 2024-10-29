import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          {/* <Heading
            level="h1"
            className="text-3xl leading-10 text-ui-fg-base font-normal"
          >
            Multixion
          </Heading> */}
          <Heading
            level="h2"
            className="text-3xl leading-10 text-ui-fg-subtle font-normal"
          >
          Welcome to Multixion
          </Heading>
          <br />
          <a href="">At Multixion, we believe that shopping should be an enjoyable experience. Our mission is to provide you with a diverse range of high-quality products that enhance your life, whether you’re looking for the latest gadgets, stylish apparel, or essential home goods. With our carefully curated collections and user-friendly platform, finding what you need has never been easier.</a>
        </span>
        {/* <a
          href="https://github.com/medusajs/nextjs-starter-medusa"
          target="_blank"
        >
          <Button variant="secondary">
         
            <Github />
          </Button>
        </a> */}
      </div>
    </div>
  )
}

export default Hero
