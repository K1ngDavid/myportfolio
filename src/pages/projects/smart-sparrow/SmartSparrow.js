import backgroundSprLarge from 'assets/spr-background-large.jpg';
import backgroundSprPlaceholder from 'assets/spr-background-placeholder.jpg';
import imageSprBackgroundVolcanismLarge from 'assets/spr-background-volcanism-large.jpg';
import imageSprBackgroundVolcanismPlaceholder from 'assets/spr-background-volcanism-placeholder.jpg';
import imageSprBackgroundVolcanism from 'assets/spr-background-volcanism.jpg';
import backgroundSpr from 'assets/spr-background.jpg';
import bsecureImage from 'assets/bsecure.png';
import imageSprComponentsDarkLarge from 'assets/CV.png';
import imageSprComponentsDarkPlaceholder from 'assets/spr-components-dark-placeholder.png';
import imageSprComponentsDark from 'assets/CV.png';
import imageSprComponentsLightLarge from 'assets/spr-components-light-large.png';
import imageSprComponentsLightPlaceholder from 'assets/spr-components-light-placeholder.png';
import imageSprComponentsLight from 'assets/spr-components-light.png';
import imageSprDesignSystemDarkLarge from 'assets/spr-design-system-dark-large.png';
import imageSprDesignSystemDarkPlaceholder from 'assets/spr-design-system-dark-placeholder.png';
import imageSprDesignSystemDark from 'assets/spr-design-system-dark.png';
import imageSprDesignSystemLightLarge from 'assets/spr-design-system-light-large.png';
import imageSprDesignSystemLightPlaceholder from 'assets/spr-design-system-light-placeholder.png';
import imageSprDesignSystemLight from 'assets/spr-design-system-light.png';
import imageSprLessonBuilderDarkLarge from 'assets/spr-lesson-builder-dark-large.jpg';
import imageSprLessonBuilderDarkPlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import imageSprLessonBuilderDark from 'assets/spr-lesson-builder-dark.jpg';
import imageSprLessonBuilderLightLarge from 'assets/spr-lesson-builder-light-large.jpg';
import imageSprLessonBuilderLightPlaceholder from 'assets/spr-lesson-builder-light-placeholder.jpg';
import imageSprLessonBuilderLight from 'assets/spr-lesson-builder-light.jpg';
import videoSprMotionLarge from 'assets/spr-motion-large.mp4';
import videoSprMotionPlaceholder from 'assets/spr-motion-placeholder.jpg';
import videoSprMotion from 'assets/spr-motion.mp4';
import imageSprSchema1DarkLarge from 'assets/spr-schema-1-dark-large.png';
import imageSprSchema1DarkPlaceholder from 'assets/spr-schema-1-dark-placeholder.png';
import imageSprSchema1Dark from 'assets/spr-schema-1-dark.png';
import imageSprSchema1LightLarge from 'assets/spr-schema-1-light-large.png';
import imageSprSchema1LightPlaceholder from 'assets/spr-schema-1-light-placeholder.png';
import imageSprSchema1Light from 'assets/spr-schema-1-light.png';
import imageSprSchema2DarkLarge from 'assets/spr-schema-2-dark-large.png';
import imageSprSchema2DarkPlaceholder from 'assets/spr-schema-2-dark-placeholder.png';
import imageSprSchema2Dark from 'assets/spr-schema-2-dark.png';
import imageSprSchema2LightLarge from 'assets/spr-schema-2-light-large.png';
import imageSprSchema2LightPlaceholder from 'assets/spr-schema-2-light-placeholder.png';
import imageSprSchema2Light from 'assets/spr-schema-2-light.png';
import imageSprStoryboarderDarkLarge from 'assets/spr-storyboarder-dark-large.png';
import imageSprStoryboarderDarkPlaceholder from 'assets/spr-storyboarder-dark-placeholder.png';
import imageSprStoryboarderDark from 'assets/spr-storyboarder-dark.png';
import imageSprStoryboarderLightLarge from 'assets/spr-storyboarder-light-large.png';
import imageSprStoryboarderLightPlaceholder from 'assets/spr-storyboarder-light-placeholder.png';
import imageSprStoryboarderLight from 'assets/spr-storyboarder-light.png';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Link } from 'components/Link';
import { Meta } from 'components/Meta';
import { SegmentedControl, SegmentedControlOption } from 'components/SegmentedControl';
import { ThemeProvider, useTheme } from 'components/ThemeProvider';
import { useAppContext } from 'hooks';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import dynamic from 'next/dynamic';
import { Fragment, useMemo } from 'react';
import { media } from 'utils/style';
import styles from './SmartSparrow.module.css';

const Earth = dynamic(() => import('./Earth').then(mod => mod.Earth));
const EarthSection = dynamic(() => import('./Earth').then(mod => mod.EarthSection));

const title = 'Mon profil';
const description =
  "Étudiant en BTS SIO à l'ORT montreuil,je suis un passionné d'informatique. Les domaines comme la cybersécurité ou encore le Machine Learning font partis de mes aspirations professionnelles.";
const roles = [
  
  'David Roufé',
  '26/12/2002',
  '07 82 74 91 22',
  'david.roufe@gmail.com'
];

export const SmartSparrow = () => {
  const { themeId } = useTheme();
  const { dispatch } = useAppContext();

  const isDark = themeId === 'dark';
  const themes = ['dark', 'light'];

  const handleThemeChange = index => {
    dispatch({ type: 'setTheme', value: themes[index] });
  };

  return (
    <Fragment>
      <ProjectContainer className="spr">
        <Meta title={title} prefix="Projects" description={description} />
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={backgroundSpr}
          srcSet={`${backgroundSpr.src} 1080w, ${backgroundSprLarge.src} 2160w`}
          placeholder={backgroundSprPlaceholder}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://www.linkedin.com/in/david-roufe-6aba031b3/"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={themeId}
              srcSet={
                isDark
                  ? [imageSprLessonBuilderDark, imageSprLessonBuilderDark]
                  : [imageSprLessonBuilderDark, imageSprLessonBuilderDark]
              }
              placeholder={
                isDark
                  ? imageSprLessonBuilderDark
                  : imageSprLessonBuilderDark
              }
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="The aero lesson builder app dragging an audio component into a screen about plant cells."
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Compétences</ProjectSectionHeading>
            <div>



<ul className={styles.container} style={{fontSize :"30px",listStyle:"none",color:'#00bfff'}}>
  <li>
    <strong>HTML5</strong>
  </li>
  <li>
    <strong>CSS3</strong>
  </li>
  <li>
    <strong>JS</strong>
  </li>
  <li>
    <strong>PHP</strong>
  </li>
  <li>
    <strong>Python</strong>
  </li>
  <li>
    <strong>Java</strong>
  </li>
</ul> 

</div>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection light={isDark}>
          <ProjectSectionContent>
            <Image
              key={themeId}
              srcSet={
                isDark
                  ? [imageSprComponentsDark, imageSprComponentsDark]
                  : [imageSprComponentsDark, imageSprComponentsDark]
              }
              placeholder={
                isDark
                  ? imageSprComponentsDarkPlaceholder
                  : imageSprComponentsLightPlaceholder
              }
              alt={`A set of ${themeId} themed components for the aero design system`}
              sizes="100vw"
            />
            <ProjectTextRow>
              <SegmentedControl
                currentIndex={themes.indexOf(themeId)}
                onChange={handleThemeChange}
              >
                <SegmentedControlOption>Dark theme</SegmentedControlOption>
                <SegmentedControlOption>Light theme</SegmentedControlOption>
              </SegmentedControl>
            </ProjectTextRow>
            <ProjectTextRow>
              <ProjectSectionHeading>Mon CV</ProjectSectionHeading>
              <ProjectSectionText>
                Ci dessus vous pourrez trouver mon CV
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Mes formations</ProjectSectionHeading>
              <div className={styles.container}>
                <div className={styles.formation}>
                  <h1>BTS SIO option SLAM</h1>
                  <h2>ORT MONTREUIL</h2>
                  <p>Deux années qui m&apos;ont donnés de grandes compétences en informatique.</p>
                </div>
                <div className={styles.formation}>
                  <h1>Année de préparation</h1>
                  <h2>SCE</h2>
                  <p>Année préparatoire en cycle ingénieur informatique en Israël. Apprentissage des mathématiques et de la physique avancée et renforcement de l’anglais. Initiation à l’informatique.</p>
                </div>
                <div className={styles.formation}>
                  <h1>Baccalauréat Économique et Social</h1>
                  <h2>ORT Villiers-Le-Bel</h2>
                  <p>Cursus économique et social.
                    Apprentissage du monde économique.</p>
                </div>
              </div>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
          <ProjectSection backgroundOverlayOpacity={0.5}>
            <ProjectTextRow>
              <ProjectSectionHeading>Mes experiences professionnelles</ProjectSectionHeading>
              </ProjectTextRow>
              <div style={{marginTop: '100px'}}></div>
            <ProjectSectionColumns width="full">
              <ProjectSectionContent width="full">
                <ProjectTextRow width="s">
                  <ProjectSectionHeading>Stage - Bsecure</ProjectSectionHeading>
                  <ProjectSectionText>
                  Stage de première année ou j&apos;ai pu découvrir le monde de l&apos;entreprise. L&apos;utilisation de AWS et l&apos;apprentissage de NodeJS m&apos;ont permis de comprendre les besoins modernes des entreprises 
                  </ProjectSectionText>
                </ProjectTextRow>
              </ProjectSectionContent>
              <Image
                src={bsecureImage}
                placeholder="Bsecure"
              />
            </ProjectSectionColumns>
          </ProjectSection>
        
        <ProjectSection>
      
        <ProjectSectionColumns width="full">
              <ProjectSectionContent width="full">
                <ProjectTextRow width="s">
                  <ProjectSectionHeading>Stage - Bsecure</ProjectSectionHeading>
                  <ProjectSectionText>
                  Stage de deuxième année où j&apos;ai pu créer en python des firewalls(pare-feu) pour la sécurité des systèmes informatiques du groupe ACCOR.
                  </ProjectSectionText>
                </ProjectTextRow>
              </ProjectSectionContent>
              <Image
                src={bsecureImage}
                placeholder="Bsecure"
              />
            </ProjectSectionColumns>
        </ProjectSection>
      </ProjectContainer>
      
      <Footer />
    </Fragment>
  );
};
