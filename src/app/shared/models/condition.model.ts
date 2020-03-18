export class Condition {
  name: string;
  started: Date;

  constructor(theName: string, theDate: Date) {
    this.name = theName;
    this.started = theDate;
  }

  getPubMedUrl(): string {
    return 'https://www.ncbi.nlm.nih.gov/pubmed/?term='.concat(this.name);
  }
}
