class JobOffers {
  employer;
  position;
  jobCandidates = [];

  constructor(employer, position) {
    this.employer = employer;
    this.position = position;
  }

  jobApplication(candidates) {
    for (let candidateInfo of candidates) {
      let [name, education, yearsExperience] = candidateInfo.split("-");
      let existingCandidate = this.jobCandidates.find(
        (candidate) => candidate.name === name
      );

      if (existingCandidate) {
        existingCandidate.yearsExperience += parseInt(yearsExperience, 10);
      } else {
        this.jobCandidates.push({
          name,
          education,
          yearsExperience: parseInt(yearsExperience, 10),
        });
      }
    }
    return `You successfully added candidates: ${this.jobCandidates
      .map((candidate) => candidate.name)
      .join(", ")}.`;
  }

  jobOffer(chosenPerson) {
    const chosenInfo = chosenPerson.split("-");
    let name = chosenInfo[0];
    let minimalExperience = parseInt(chosenInfo[1], 10);

    let chosenCandidate = this.jobCandidates.find(
      (candidate) => candidate.name === name
    );

    if (!chosenCandidate) {
      throw new Error(`${name} is not in the candidates list!`);
    }

    if (chosenCandidate.yearsExperience < minimalExperience) {
      throw new Error(
        `${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`
      );
    }

    chosenCandidate.yearsExperience = `hired`;
    return `Welcome aboard, our newest employee is ${name}.`;
  }

  salaryBonus(name) {
    let existingPerson = this.jobCandidates.find((p) => p.name === name);

    if (!existingPerson) {
      throw new Error(`${name} is not in the candidates list!`);
    }

    if (existingPerson.education === "Bachelor") {
      return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`;
    } else if (existingPerson.education === `Master`) {
      return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`;
    } else {
      return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`;
    }
  }

  candidatesDatabase() {
    if (this.jobCandidates.length == 0) {
      throw new Error(`Candidate Database is empty!`);
    }

    const sortedCandidates = this.jobCandidates
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name));

    const candidatesInfo = sortedCandidates
      .map((candidate) => `${candidate.name}-${candidate.yearsExperience}`)
      .join("\n");

    return `Candidates list:\n${candidatesInfo}`;
  }
}

// You successfully added candidates: John Doe, Peter Parker, Jordan Cole, Daniel Jones.
// Welcome aboard, our newest employee is John Doe.
// Welcome aboard, our newest employee is Peter Parker.
// Welcome aboard, our newest employee is Jordan Cole.
// Jordan Cole will sign a contract for Google, as Strategy Analyst with a salary of $40,000 per year!
// John Doe will sign a contract for Google, as Strategy Analyst with a salary of $50,000 per year!
// Candidates list:
// Daniel Jones-18
// John Doe-hired
// Jordan Cole-hired
// Peter Parker-hired

let Jobs = new JobOffers("Google", "Strategy Analyst");
console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Jordan Cole-High School-5", "Daniel Jones- Bachelor-18"]));
console.log(Jobs.jobOffer("John Doe-8"));
console.log(Jobs.jobOffer("Peter Parker-4"));
console.log(Jobs.jobOffer("Jordan Cole-4"));
console.log(Jobs.salaryBonus("Jordan Cole"));
console.log(Jobs.salaryBonus("John Doe"));
console.log(Jobs.candidatesDatabase());

