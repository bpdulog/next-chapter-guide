# Layoff Guide — Build Plan

## Goal
Create a local-only, zero-dependency guide for people facing a layoff in the United States. Keep the tone calm, practical, and respectful; help the reader make a short list of next actions and questions without pretending to provide individualized legal or financial advice.

## Audience and use
- People who have just learned their job may end or has ended, including those preparing for an HR meeting.
- Usable on a phone, with printing for meetings and offline/local use.
- Avoid hardcoded filing deadlines; explain that timing and eligibility vary and point to the relevant official agency.

## Information architecture
1. A short orientation with a “start here” checklist and progress indicator.
2. Action checklist grouped by: today / before the last day / first week after / next few weeks.
3. HR meeting question list grouped by final pay and severance, benefits, retirement/equity, and paperwork/references.
4. Plain-language decision prompts for severance, health coverage, unemployment, retirement, and pay.
5. Copyable scripts for requesting documents, time to review, and a benefits/unemployment call.
6. Print summary and primary source links near the claims they support.

## Interaction and accessibility
- Checkboxes save progress in localStorage with a clear reset action.
- “Print this guide” triggers browser print styles that hide controls and present clean checklists.
- Semantic landmarks, headings, labels, visible focus, keyboard access, reduced-motion support, and mobile-friendly layout.
- No external scripts, fonts, images, APIs, analytics, or build tools.

## Content guardrails
- U.S.-focused and empathetic; clarify that company plans, state rules, and individual facts affect outcomes.
- Do not promise eligibility, suggest a universal deadline, or state a legal entitlement without qualification.
- Link to primary sources: U.S. Department of Labor (FLSA, COBRA, unemployment overview), IRS (retirement plans), HealthCare.gov (Marketplace), and the relevant state workforce agency locator.
- Explain WARN notice as conditional on employer/layoff circumstances; link to DOL without suggesting every layoff qualifies.

## Files and completion
- `index.html`: complete content and controls.
- `styles.css`: responsive, print-aware visual design.
- `app.js`: local progress persistence, copy buttons, print action, and reset.
- `README.md`: local use, privacy, accessibility notes, and source review date.
- Smoke-check HTML/JS presence and behavior with available local tooling; no dependencies.
