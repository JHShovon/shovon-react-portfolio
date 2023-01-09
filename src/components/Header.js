import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    console.log(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollRef = useRef(null);
  let previousScrollPosition = 0;

  const handleScroll = () => {
    const currentScrollPosition = window.scrollY;
    const scroll = scrollRef.current;

    if (currentScrollPosition > previousScrollPosition) {
      // scrolling down
      scroll.style.transform = "translateY(-200px)";
    } else {
      // scrolling up
      scroll.style.transform = "translateY(0)";
    }

    previousScrollPosition = currentScrollPosition;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const socialLinks = socials.map((eachSocial, index) => {
    const { icon, url } = eachSocial;
    return (
      <a href={url} target="_blank">
        <FontAwesomeIcon icon={icon} size="2x" />
      </a>
    );
  });

  return (
    <Box
      ref={scrollRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      zIndex={9999}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav style={{ display: "flex", columnGap: "20px" }}>
            {/* Add social media links based on the `socials` data */}
            {socialLinks}
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a href="/#contact-me" onClick={handleClick("contactme")}>
                Contact Me
              </a>
              <a href="/#project" onClick={handleClick("projects")}>
                Projects
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
