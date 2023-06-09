import sliceAnnotationLarge from 'assets/async.jpg';
import sliceAnnotationPlaceholder from 'assets/slice-annotation-placeholder.png';
import sliceAnnotation from 'assets/slice-annotation.png';
import sliceAppLarge from 'assets/aws&nodejs.png';
import sliceAppPlaceholder from 'assets/slice-app-placeholder.jpg';
import sliceApp from 'assets/aws&nodejs.png';
import sliceBackgroundBarLarge from 'assets/slice-background-bar-large.jpg';
import sliceBackgroundBarPlaceholder from 'assets/slice-background-bar-placeholder.jpg';
import sliceBackgroundBar from 'assets/code.png';
import sliceBackgroundLarge from 'assets/slice-background-large.jpg';
import sliceBackgroundPlaceholder from 'assets/slice-background-placeholder.jpg';
import sliceBackground from 'assets/slice-background.jpg';
import sliceIrlPlaceholder from 'assets/slice-irl-placeholder.jpg';
import sliceIrl from 'assets/slice-irl.jpg';
import sliceSidebarAnnotationsLarge from 'assets/slice-sidebar-annotations-large.png';
import sliceSidebarAnnotationsPlaceholder from 'assets/slice-sidebar-annotations-placeholder.png';
import sliceSidebarAnnotations from 'assets/slice-sidebar-annotations.png';
import sliceSidebarLayersLarge from 'assets/slice-sidebar-layers-large.png';
import sliceSidebarLayersPlaceholder from 'assets/slice-sidebar-layers-placeholder.png';
import sliceSidebarLayers from 'assets/slice-sidebar-layers.png';
import sliceSlidesLarge from 'assets/scans.png';
import sliceSlidesPlaceholder from 'assets/slice-slides-placeholder.jpg';
import forcePoint from 'assets/forcepoint.webp';
import sliceSlides from 'assets/scans.png';
import capture from 'assets/capture.png';
import firewalls from 'assets/how-firewalls-work.png';
import amazon from 'assets/amazon-s3.png';
import bsecure from 'assets/bsecure.png';
import cybergouv from 'assets/cybergouv.jpg';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
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
import { Fragment } from 'react';
import { media } from 'utils/style';
import styles from './Slice.module.css';

const title = 'Mes stages';
const description =
  'Cette section est dédiée à la présentation de mes 2 stages réalisées en BTS SIO.';
const roles = ['AWS Lambda', 'Node JS', 'Python'];

export const Slice = () => {
  return (
    <Fragment>
      <Meta title={title} prefix="Projects" description={description} />
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={sliceBackground}
          srcSet={`${sliceBackground.src} 1280w, ${sliceBackgroundLarge.src} 2560w`}
          placeholder={sliceBackgroundPlaceholder}
          opacity={0.8}
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
              srcSet={[sliceApp, sliceAppLarge]}
              placeholder={sliceAppPlaceholder}
              alt="The Slice web application showing a selected user annotation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.container}>
              <ProjectSectionHeading>Description de l&apos;entreprise</ProjectSectionHeading>
              <ul className={styles.formation} style={{fontSize:'20px'}}>
                  <li>Dénomination : Bsecure</li>
                  <li>Adresse : 61 AV SECRETAN, 75019 PARIS</li>
                  <li>Forme juridique : SARL unipersonnelle</li>
                  <li>Taille: PME</li>
                  <li>Effectif : 20 salariés</li>
                  <li>Secteur d&apos;activité : Cybersécurité / DevOps</li>
                </ul>
              <ProjectSectionText>
              Bsecure est un cabinet indépendant d&apos;expertise en cybersécurité des applications et des infrastructures crée en 2009.
              L&apos;entreprise offre des services de devSECops alliant sécurité et développement.
              L&apos;entreprise fait aussi des audits de sécurité et de l&apos;assistance RSSI.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={[bsecure, bsecure]}
                placeholder={sliceSidebarAnnotationsPlaceholder}
                alt="Multiple user annotations on a shared layer."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
          <Image
                className={styles.sidebarImage}
                srcSet={[cybergouv, cybergouv]}
                placeholder={sliceSidebarAnnotationsPlaceholder}
                alt="Multiple user annotations on a shared layer."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Les missions</ProjectSectionHeading>
              <ProjectSectionText>
              L&apos;entreprise utilise un logiciel de pentest afin de rechercher les failles systèmes et logiciels de ses clients(qui sont des entreprises). Cet outil, InsightappSec lance un scan à travers une application, il suffit d’enregistrer la target (en écrivant le nom de domaine du site) pour commencer le scan. L’objectif pour moi sera donc de coder un logiciel en utilisant la version API de InsightAppSec, d’utiliser une expression régulière (crontab) afin d’être au courant chaque minute du statut du serveur du site client, dès que celui-ci ne répondra plus, je devrai avertir à la minute les responsables.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={[sliceSlides, sliceSlidesLarge]}
              placeholder={sliceSlidesPlaceholder}
              alt="The new My Slides tab in slice, showing annotated and favorited slides."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="top">
          <ProjectSectionContent className={styles.grid}>
            <div className={styles.gridImage}>
              <div className={styles.gridBackground}>
                <Image
                  srcSet={[sliceBackgroundBar, sliceBackgroundBarLarge]}
                  placeholder={sliceBackgroundBarPlaceholder}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>
              <div className={styles.gridForeground}>
                <Image
                  srcSet={[sliceAnnotationLarge, sliceAnnotationLarge]}
                  placeholder={sliceAnnotationPlaceholder}
                  alt="An annotation preview popover with statistics for shape perimeter and area."
                  sizes={`(max-width: ${media.mobile}px) 584px, (max-width: ${media.tablet}px) 747px, 556px`}
                />
              </div>
            </div>
            <div className={styles.gridText}>
              <ProjectSectionHeading>Contraintes & difficultés</ProjectSectionHeading>
              <ul className={styles.ul}>
                <li> Le concept d&apos;asynchrone</li>
                <li> L&apos;autonomie </li>
                <li>L&apos;apprentisssage des fonctions en FAAS avec AWS</li>
              </ul>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Conclusion</ProjectSectionHeading>
              <ProjectSectionText>
              Durant ce stage, de nombreux problèmes se sont interposés, comme NodeJS, que je n’avais jamais vu auparavant.
              De plus, la syntaxe était tout autant déroutante, différente de tous les langages que j’avais rencontré.
              Mais la persévérance, les cours et la documentation m’ont permis de m’habituer à des concepts nouveaux comme les Callbacks, les Promise et l’asynchrone en général.
              Le service que j’ai réalisé est aujourd’hui utilisé par mon entreprise et permet de les alerter à la minute qu’un site client tombe.
              Cependant, mon script pourra toujours être optimisé, amélioré, et je serai ravi d’effectuer mon stage de deuxième année dans la même entreprise.
              Etant passionné par la cybersécurité, ce stage a amorcé mon expérience dans l’informatique et plus particulièrement dans la cybersécurité et ses enjeux, la sécurité et la confiance étant selon moi les deux critères fondamentaux pour construire ce type d’entreprise. 
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <ProjectContainer className={styles.slice}>
        <ProjectSection padding="top">
        <h1 style={{fontSize:"50px", marginBottom:"40px"}}>2 ème Stage</h1>
          <ProjectSectionContent>
            <ProjectImage
              srcSet={[forcePoint, forcePoint]}
              placeholder={sliceAppPlaceholder}
              alt="The Slice web application showing a selected user annotation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Les missions</ProjectSectionHeading>
              <ProjectSectionText>
              Le but du projet est de coder des firewalls virtuels (pare-feu) de nouvelle génération en Python sur la plateforme AWS en utilisant le système de FAAS (Function as a Service) pour sécuriser les systèmes informatiques du groupe ACCOR (entreprise cliente de Bsecure). C&apos;est donc un projet complet car il faut pour cela maîtriser la programmation et connaître dans les détails le réseau et le fonctionnement d&apos;un système informatique. 
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={[capture, capture]}
              placeholder={sliceSlidesPlaceholder}
              alt="The new My Slides tab in slice, showing annotated and favorited slides."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="top">
          <ProjectSectionContent className={styles.grid}>
            <div className={styles.gridImage}>
              <div className={styles.gridBackground}>
                <Image
                  srcSet={[firewalls, firewalls]}
                  placeholder={sliceBackgroundBarPlaceholder}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>
            </div>
            <div className={styles.gridText}>
              <ProjectSectionHeading>Contraintes & difficultés</ProjectSectionHeading>
              <ul className={styles.ul}>
                <li> Des concepts poussés en réseaux</li>
                <li> Une API complexe  </li>
                <li> Le travail d&apos;équipe</li>
              </ul>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Conclusion</ProjectSectionHeading>
              <ProjectSectionText>
              Durant ce stage, j&apos;ai appris beaucoup de nouvelles choses qui ne faisaient pas parti de mon domaine d&apos;apprentissage (des concepts en réseau …). Le concept de nouvelle génération de firewall m&apos;a fait comprendre les enjeux actuels en termes de sécurité au sein des systèmes informatique.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              src={amazon}
              placeholder={sliceIrlPlaceholder}
              alt="Students at the University of New South Wales using the new collaborative annotation features"
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
