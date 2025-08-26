# SchoolTags

Generate and print school cards and name labels for students, personalized by subject and student data.

## Features

- Form to capture student data (first name, last name, grade, section, group, list number, subjects, number of labels).
- Automatic generation of subject cards and name labels.
- Button to print directly from the browser.
- Easy editing of data before printing.
- Responsive and print-ready styles (A4, colors preserved).

## Installation

1. Clone the repository:

```bash
git clone <repo-url>
cd SchoolTags
```

2. Install dependencies:

```bash
npm install
```

3. Start the project:

```bash
npm run dev
```

## Usage

1. Fill out the form with student data and subjects.
2. Click "Generate labels".
3. Review the preview of cards and labels.
4. Press "Print labels" to open the browser's print dialog.
5. Cut out and use the printed cards.

## Customization

- You can modify styles in `src/index.css` and components in `src/components/`.
- The design is optimized for printing on A4 paper.

## Technologies

- React + Vite
- TailwindCSS

## Main Structure

- `src/App.tsx`: Main component and print logic.
- `src/components/StudentForm.tsx`: Data capture form.
- `src/components/StudentSubjectCards.tsx`: Subject cards.
- `src/components/StudentNameLabels.tsx`: Name labels.

## Licencia

MIT
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:
