"""Generate cv-en.pdf and cv-fr.pdf matching the style of cv-es.pdf."""
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.units import mm
from reportlab.pdfgen import canvas
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT
import os

W, H = A4
BLUE  = colors.HexColor('#1a5fa8')
BLACK = colors.HexColor('#1a1a1a')
GRAY  = colors.HexColor('#555555')
LGRAY = colors.HexColor('#888888')
LBLUE = colors.HexColor('#2b6cb0')

def build_styles():
    s = {}
    s['name'] = ParagraphStyle('name', fontSize=22, leading=26, textColor=BLACK,
                                fontName='Helvetica-Bold', alignment=TA_CENTER, spaceAfter=2*mm)
    s['subtitle'] = ParagraphStyle('subtitle', fontSize=11, leading=14, textColor=BLUE,
                                    fontName='Helvetica-Bold', alignment=TA_CENTER, spaceAfter=1*mm)
    s['contact'] = ParagraphStyle('contact', fontSize=8.5, leading=12, textColor=LGRAY,
                                   fontName='Helvetica', alignment=TA_CENTER, spaceAfter=4*mm)
    s['section'] = ParagraphStyle('section', fontSize=10, leading=13, textColor=BLUE,
                                   fontName='Helvetica-Bold', spaceBefore=5*mm, spaceAfter=1.5*mm)
    s['body'] = ParagraphStyle('body', fontSize=9, leading=13, textColor=BLACK,
                                fontName='Helvetica', spaceAfter=2*mm)
    s['bold'] = ParagraphStyle('bold', fontSize=9, leading=13, textColor=BLACK,
                                fontName='Helvetica-Bold', spaceAfter=1*mm)
    s['proj_title'] = ParagraphStyle('proj_title', fontSize=9, leading=13, textColor=BLACK,
                                      fontName='Helvetica-Bold', spaceAfter=0*mm)
    s['proj_stack'] = ParagraphStyle('proj_stack', fontSize=8, leading=11, textColor=LBLUE,
                                      fontName='Helvetica-Oblique', spaceAfter=1.5*mm)
    s['repo'] = ParagraphStyle('repo', fontSize=8, leading=11, textColor=LBLUE,
                                fontName='Helvetica-Oblique', spaceAfter=3*mm)
    s['bullet'] = ParagraphStyle('bullet', fontSize=9, leading=13, textColor=BLACK,
                                  fontName='Helvetica', leftIndent=10*mm,
                                  firstLineIndent=-4*mm, spaceAfter=1*mm)
    s['edu_title'] = ParagraphStyle('edu_title', fontSize=9.5, leading=13, textColor=BLACK,
                                     fontName='Helvetica-Bold', spaceAfter=0*mm)
    s['edu_sub'] = ParagraphStyle('edu_sub', fontSize=9, leading=13, textColor=LGRAY,
                                   fontName='Helvetica', spaceAfter=3*mm)
    return s

def hr():
    return HRFlowable(width='100%', thickness=0.5, color=BLUE, spaceAfter=3*mm)

def section(title, s):
    return [Paragraph(title, s['section']), hr()]

def bullet_item(text, s):
    return Paragraph(f'• {text}', s['bullet'])

def skills_table(rows, s):
    data = [[Paragraph(f'<b>{label}</b>', s['body']),
             Paragraph(value, s['body'])] for label, value in rows]
    t = Table(data, colWidths=[42*mm, 130*mm])
    t.setStyle(TableStyle([
        ('VALIGN',    (0, 0), (-1, -1), 'TOP'),
        ('LEFTPADDING',  (0, 0), (-1, -1), 0),
        ('RIGHTPADDING', (0, 0), (-1, -1), 0),
        ('TOPPADDING',   (0, 0), (-1, -1), 1),
        ('BOTTOMPADDING',(0, 0), (-1, -1), 1),
    ]))
    return t


# ── English ───────────────────────────────────────────────────────────────────

def build_en(path, s):
    doc = SimpleDocTemplate(path, pagesize=A4,
                            leftMargin=18*mm, rightMargin=18*mm,
                            topMargin=16*mm, bottomMargin=16*mm)
    story = []

    story.append(Paragraph('DAVID JARAMILLO', s['name']))
    story.append(Paragraph('Software Developer | Industrial Engineer', s['subtitle']))
    story.append(Paragraph(
        'cdavid.jaramillo@gmail.com  |  +57 300 576 9937  |  github.com/Cdavid703  |  Colombia',
        s['contact']))

    # Profile
    story += section('PROFESSIONAL PROFILE', s)
    story.append(Paragraph(
        'Software Developer and Industrial Engineer with a Technical Degree in Software Development, '
        'specializing in process automation and full-stack web application development. '
        'Hands-on experience with production projects combining modern frontend (React, JavaScript ES6+), '
        'serverless backend (Firebase), automation with Python and VBA, and ERP integration including '
        'SAP and Salesforce. Focused on transforming manual processes into efficient digital solutions '
        'with measurable impact.',
        s['body']))

    # Skills
    story += section('TECHNICAL SKILLS', s)
    story.append(skills_table([
        ('Frontend',         'HTML5, CSS3, JavaScript (ES6+), React 19, React Router, Tailwind CSS, Vite'),
        ('Backend / BaaS',   'Firebase (Firestore, Storage, Auth), Python, Node.js'),
        ('Automation',       'Python, VBA, Excel Macros, SAP + VBA, Automation Scripts'),
        ('Databases',        'MySQL, Firebase Firestore, SQL'),
        ('Languages',        'JavaScript, Python, VBA, C#, SQL, HTML/CSS'),
        ('Tools',            'Git, GitHub, Visual Studio Code, Visual Studio, nginx, ESLint'),
        ('ERP Integrations', 'SAP, Salesforce, Zendesk'),
        ('Data Analysis',    'Power BI, Advanced Excel, pandas'),
    ], s))
    story.append(Spacer(1, 3*mm))

    # Projects
    story += section('HIGHLIGHTED PROJECTS', s)

    story.append(Paragraph('DeliStars — Live Food Delivery Platform', s['proj_title']))
    story.append(Paragraph('React · Firebase · Tailwind CSS · nginx', s['proj_stack']))
    story.append(Paragraph(
        'Full-stack web application for managing food delivery orders for a food store, deployed on a private server.',
        s['body']))
    story.append(bullet_item('Architecture with two independent modules: delivery platform and job portal, each with separate build and Vite deployment.', s))
    story.append(bullet_item('Firebase Firestore with real-time listeners (onSnapshot) for instant order status updates without page reload.', s))
    story.append(bullet_item('Differentiated role system: cashiers and delivery drivers, with custom views and permissions per profile.', s))
    story.append(bullet_item('Firebase Storage for CV management in the job portal module (vacantes_postulantes collection).', s))
    story.append(bullet_item('Deployed on Debian VPS with nginx, permission configuration and manual CI via SCP.', s))
    story.append(bullet_item('Stack: React 19, JavaScript ES6+, Tailwind CSS, Firebase v12, React Router v7, Vite, date-fns, Lucide React.', s))
    story.append(Paragraph('Repository: github.com/Cdavid703/delistars', s['repo']))

    story.append(Paragraph('ProyectoCSharp — Student Management System', s['proj_title']))
    story.append(Paragraph('C# · Windows Forms · MySQL · .NET 6', s['proj_stack']))
    story.append(Paragraph(
        'Complete desktop application for student registration and administration with relational database.',
        s['body']))
    story.append(bullet_item('Full CRUD (Create, Read, Update, Delete) with MySQL database connection.', s))
    story.append(bullet_item('Record export to Excel using the SpreadsheetLight library.', s))
    story.append(bullet_item('Graphical interface with Windows Forms on .NET 6 Windows, designed for administrative use.', s))
    story.append(Paragraph('Repository: github.com/Cdavid703/ProyectoCSharp', s['repo']))

    story.append(Paragraph('JaraLingua — Language Learning Platform', s['proj_title']))
    story.append(Paragraph('HTML5 · CSS3 · JavaScript · Python · nginx', s['proj_stack']))
    story.append(Paragraph(
        'Interactive educational web platform for learning English and French with progressive content paths.',
        s['body']))
    story.append(bullet_item('Static site with modular structure by levels (basic and intermediate for English, Niveau 7 for French).', s))
    story.append(bullet_item('Interactive activities, visual support images and dynamic practice sections.', s))
    story.append(bullet_item('Includes integration with ElevenLabs API for audio features.', s))
    story.append(bullet_item('Published in production: jaralingua.com. Optimized with sitemap.xml and robots.txt for SEO.', s))
    story.append(Paragraph('Repository: github.com/Cdavid703/jaralingua', s['repo']))

    story.append(Paragraph('SAP + VBA Automation — Repetitive Process Reduction', s['proj_title']))
    story.append(Paragraph('VBA · SAP · Excel · Python', s['proj_stack']))
    story.append(Paragraph(
        'Enterprise automation solution that eliminates manual tasks in SAP environments through VBA macros.',
        s['body']))
    story.append(bullet_item('Up to 90% reduction in time spent on repetitive reporting and data extraction tasks.', s))
    story.append(bullet_item('100% data quality in processed records, eliminating human errors.', s))
    story.append(bullet_item('40% reduction in report generation time through SAP + VBA integration.', s))

    # Education
    story += section('ACADEMIC BACKGROUND', s)
    story.append(Paragraph('Industrial Engineering', s['edu_title']))
    story.append(Paragraph('Universidad San José  |  Colombia', s['edu_sub']))
    story.append(Paragraph('Technical Degree in Software Development', s['edu_title']))
    story.append(Paragraph('Colombia', s['edu_sub']))

    # Languages
    story += section('LANGUAGES', s)
    story.append(Paragraph(
        '<b>Spanish:</b> Native  &nbsp;|&nbsp;  <b>French:</b> Advanced (C1)  &nbsp;|&nbsp;  <b>English:</b> Intermediate (B2)',
        s['body']))

    doc.build(story)
    print(f'  Generated {path}')


# ── French ────────────────────────────────────────────────────────────────────

def build_fr(path, s):
    doc = SimpleDocTemplate(path, pagesize=A4,
                            leftMargin=18*mm, rightMargin=18*mm,
                            topMargin=16*mm, bottomMargin=16*mm)
    story = []

    story.append(Paragraph('DAVID JARAMILLO', s['name']))
    story.append(Paragraph('Développeur de Logiciels | Ingénieur Industriel', s['subtitle']))
    story.append(Paragraph(
        'cdavid.jaramillo@gmail.com  |  +57 300 576 9937  |  github.com/Cdavid703  |  Colombie',
        s['contact']))

    # Profile
    story += section('PROFIL PROFESSIONNEL', s)
    story.append(Paragraph(
        'Développeur de logiciels et Ingénieur Industriel avec un Diplôme Technique en '
        'Développement de Logiciels, spécialisé dans l’automatisation des processus '
        'et le développement d’applications web full-stack. Expérience pratique sur des '
        'projets en production combinant un frontend moderne (React, JavaScript ES6+), un backend '
        'serverless (Firebase), l’automatisation avec Python et VBA, et l’intégration '
        'de systèmes ERP comme SAP et Salesforce. Orienté vers la transformation des '
        'processus manuels en solutions numériques efficaces à impact mesurable.',
        s['body']))

    # Skills
    story += section('COMPÉTENCES TECHNIQUES', s)
    story.append(skills_table([
        ('Frontend',           'HTML5, CSS3, JavaScript (ES6+), React 19, React Router, Tailwind CSS, Vite'),
        ('Backend / BaaS',     'Firebase (Firestore, Storage, Auth), Python, Node.js'),
        ('Automatisation',     'Python, VBA, Macros Excel, SAP + VBA, Scripts d’automatisation'),
        ('Bases de données', 'MySQL, Firebase Firestore, SQL'),
        ('Langages',           'JavaScript, Python, VBA, C#, SQL, HTML/CSS'),
        ('Outils',             'Git, GitHub, Visual Studio Code, Visual Studio, nginx, ESLint'),
        ('Intégrations ERP', 'SAP, Salesforce, Zendesk'),
        ('Analyse de données', 'Power BI, Excel avancé, pandas'),
    ], s))
    story.append(Spacer(1, 3*mm))

    # Projects
    story += section('PROJETS REMARQUABLES', s)

    story.append(Paragraph('DeliStars — Plateforme de Livraison en Production', s['proj_title']))
    story.append(Paragraph('React · Firebase · Tailwind CSS · nginx', s['proj_stack']))
    story.append(Paragraph(
        'Application web full-stack pour la gestion de commandes de livraison à domicile d’un '
        'commerce alimentaire, déployée sur serveur privé.',
        s['body']))
    story.append(bullet_item('Architecture avec deux modules indépendants : plateforme de livraison et portail d’emploi, chacun avec build et déploiement séparés dans Vite.', s))
    story.append(bullet_item('Intégration Firebase Firestore avec des listeners en temps réel (onSnapshot) pour la mise à jour instantanée du statut des commandes sans rechargement.', s))
    story.append(bullet_item('Système de rôles différenciés : caissiers et livreurs, avec vues et permissions personnalisées par profil.', s))
    story.append(bullet_item('Firebase Storage pour la gestion des CV dans le module d’offres d’emploi (collection vacantes_postulantes).', s))
    story.append(bullet_item('Déploiement sur VPS Debian avec nginx, configuration des permissions et CI manuel via SCP.', s))
    story.append(bullet_item('Stack : React 19, JavaScript ES6+, Tailwind CSS, Firebase v12, React Router v7, Vite, date-fns, Lucide React.', s))
    story.append(Paragraph('Dépôt : github.com/Cdavid703/delistars', s['repo']))

    story.append(Paragraph('ProyectoCSharp — Système de Gestion d’Étudiants', s['proj_title']))
    story.append(Paragraph('C# · Windows Forms · MySQL · .NET 6', s['proj_stack']))
    story.append(Paragraph(
        'Application de bureau complète pour l’enregistrement et l’administration '
        'd’étudiants avec base de données relationnelle.',
        s['body']))
    story.append(bullet_item('CRUD complet (Créer, Lire, Mettre à jour, Supprimer) avec connexion à une base de données MySQL.', s))
    story.append(bullet_item('Export des enregistrements vers Excel via la bibliothèque SpreadsheetLight.', s))
    story.append(bullet_item('Interface graphique avec Windows Forms sur .NET 6 Windows, conçue pour un usage administratif.', s))
    story.append(Paragraph('Dépôt : github.com/Cdavid703/ProyectoCSharp', s['repo']))

    story.append(Paragraph('JaraLingua — Plateforme Éducative de Langues', s['proj_title']))
    story.append(Paragraph('HTML5 · CSS3 · JavaScript · Python · nginx', s['proj_stack']))
    story.append(Paragraph(
        'Plateforme web éducative interactive pour l’apprentissage de l’anglais et '
        'du français avec des parcours de contenu progressifs.',
        s['body']))
    story.append(bullet_item('Site statique avec structure modulaire par niveaux (basique et intermédiaire pour l’anglais, Niveau 7 pour le français).', s))
    story.append(bullet_item('Activités interactives, images de support visuel et sections de pratique dynamiques.', s))
    story.append(bullet_item('Inclut une intégration avec l’API ElevenLabs pour les fonctionnalités audio.', s))
    story.append(bullet_item('Publié en production : jaralingua.com. Optimisé avec sitemap.xml et robots.txt pour le référencement.', s))
    story.append(Paragraph('Dépôt : github.com/Cdavid703/jaralingua', s['repo']))

    story.append(Paragraph('Automatisation SAP + VBA — Réduction des Processus Répétitifs', s['proj_title']))
    story.append(Paragraph('VBA · SAP · Excel · Python', s['proj_stack']))
    story.append(Paragraph(
        'Solution d’automatisation d’entreprise qui élimine les tâches manuelles '
        'dans les environnements SAP via des macros VBA.',
        s['body']))
    story.append(bullet_item('Réduction jusqu’à 90 % du temps sur les tâches répétitives de reporting et d’extraction de données.', s))
    story.append(bullet_item('100 % de qualité des données traitées, éliminant les erreurs humaines.', s))
    story.append(bullet_item('Réduction de 40 % du temps de génération des rapports grâce à l’intégration SAP + VBA.', s))

    # Education
    story += section('FORMATION ACADÉMIQUE', s)
    story.append(Paragraph('Ingénierie Industrielle', s['edu_title']))
    story.append(Paragraph('Universidad San José  |  Colombie', s['edu_sub']))
    story.append(Paragraph('Diplôme Technique en Développement de Logiciels', s['edu_title']))
    story.append(Paragraph('Colombie', s['edu_sub']))

    # Languages
    story += section('LANGUES', s)
    story.append(Paragraph(
        '<b>Espagnol :</b> Natif  &nbsp;|&nbsp;  <b>Français :</b> Avancé (C1)  &nbsp;|&nbsp;  <b>Anglais :</b> Intermédiaire (B2)',
        s['body']))

    doc.build(story)
    print(f'  Generated {path}')


if __name__ == '__main__':
    out = os.path.join(os.path.dirname(__file__), '..', 'public', 'cv')
    os.makedirs(out, exist_ok=True)
    s = build_styles()
    build_en(os.path.join(out, 'cv-en.pdf'), s)
    build_fr(os.path.join(out, 'cv-fr.pdf'), s)
    print('Done.')
