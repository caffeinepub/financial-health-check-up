import { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CheckCircle2, XCircle, AlertTriangle, Shield, TrendingUp } from 'lucide-react';

interface Question {
  id: number;
  text: string;
}

const QUESTIONS: Question[] = [
  { id: 1, text: 'Do you have life insurance coverage of at least 10 times your annual income?' },
  { id: 2, text: 'Do you know how much monthly income you will need after retirement?' },
  { id: 3, text: 'Have you estimated the total cost of your children\'s education & marriage?' },
  { id: 4, text: 'Does your family have at least ₹5 lakh health insurance cover?' },
  { id: 5, text: 'Will all your loans be paid off if something happens to you?' },
  { id: 6, text: 'Can your family manage monthly expenses for 6 months without any income?' },
  { id: 7, text: 'Do you regularly invest for your long-term financial goals?' },
  { id: 8, text: 'Are you confident that your current investments will meet your future needs?' },
  { id: 9, text: 'Do you have an emergency fund equal to 6 months of expenses?' },
  { id: 10, text: 'Do you have a written financial plan guided by a professional advisor?' },
];

type Answer = 'yes' | 'no' | null;

interface FinancialHealthCheckUpProps {
  onNavigateToContact: () => void;
}

export default function FinancialHealthCheckUp({ onNavigateToContact }: FinancialHealthCheckUpProps) {
  const [answers, setAnswers] = useState<Record<number, Answer>>(
    Object.fromEntries(QUESTIONS.map(q => [q.id, null]))
  );
  const [submitted, setSubmitted] = useState(false);

  const handleAnswerChange = (questionId: number, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value as 'yes' | 'no'
    }));
    setSubmitted(false);
  };

  const allAnswered = useMemo(() => {
    return QUESTIONS.every(q => answers[q.id] !== null);
  }, [answers]);

  const score = useMemo(() => {
    return QUESTIONS.filter(q => answers[q.id] === 'yes').length;
  }, [answers]);

  const result = useMemo(() => {
    if (score <= 5) {
      return {
        label: 'Critical Zone',
        description: 'Your financial health needs immediate attention. Consider consulting with a financial advisor to create a comprehensive plan.',
        variant: 'destructive' as const,
        icon: XCircle,
        color: 'text-destructive'
      };
    } else if (score <= 7) {
      return {
        label: 'Need to Review Your Financial Plan',
        description: 'You have some financial foundations in place, but there are gaps that need addressing to secure your future.',
        variant: 'default' as const,
        icon: AlertTriangle,
        color: 'text-warning'
      };
    } else if (score <= 9) {
      return {
        label: 'Good',
        description: 'You\'re on the right track! A few improvements will help you achieve complete financial security.',
        variant: 'default' as const,
        icon: TrendingUp,
        color: 'text-success'
      };
    } else {
      return {
        label: 'Secure',
        description: 'Excellent! You have a strong financial foundation. Keep maintaining your financial discipline.',
        variant: 'default' as const,
        icon: Shield,
        color: 'text-primary'
      };
    }
  }, [score]);

  const handleSubmit = () => {
    if (allAnswered) {
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const ResultIcon = result.icon;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">
          Financial Health Check-Up
        </h1>
        <p className="text-muted-foreground text-lg">
          Answer 10 simple questions to assess your financial wellness
        </p>
      </div>

      {/* Results Display */}
      {submitted && (
        <Alert className={`border-2 ${result.color}`}>
          <ResultIcon className={`h-5 w-5 ${result.color}`} />
          <AlertTitle className="text-xl font-bold flex items-center gap-2">
            Your Score: {score}/10 - {result.label}
          </AlertTitle>
          <AlertDescription className="mt-2 text-base">
            {result.description}
          </AlertDescription>
          <div className="mt-4">
            <Button onClick={onNavigateToContact} size="lg" className="w-full sm:w-auto">
              Get Professional Guidance
            </Button>
          </div>
        </Alert>
      )}

      {/* Questions */}
      <Card className="border-2 shadow-lg bg-card/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Assessment Questions</CardTitle>
          <CardDescription>
            Please answer all questions honestly for an accurate assessment
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {QUESTIONS.map((question, index) => (
            <div key={question.id} className="space-y-3 pb-6 border-b last:border-b-0 border-border/50">
              <div className="flex items-start gap-3">
                <Badge variant="outline" className="mt-1 shrink-0">
                  {index + 1}
                </Badge>
                <Label className="text-base font-medium leading-relaxed flex-1">
                  {question.text}
                </Label>
              </div>
              <RadioGroup
                value={answers[question.id] || ''}
                onValueChange={(value) => handleAnswerChange(question.id, value)}
                className="flex gap-6 ml-11"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id={`q${question.id}-yes`} />
                  <Label 
                    htmlFor={`q${question.id}-yes`} 
                    className="cursor-pointer font-normal flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="h-4 w-4 text-success" />
                    Yes
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id={`q${question.id}-no`} />
                  <Label 
                    htmlFor={`q${question.id}-no`} 
                    className="cursor-pointer font-normal flex items-center gap-1.5"
                  >
                    <XCircle className="h-4 w-4 text-muted-foreground" />
                    No
                  </Label>
                </div>
              </RadioGroup>
            </div>
          ))}

          <div className="pt-4">
            <Button 
              onClick={handleSubmit} 
              disabled={!allAnswered}
              size="lg"
              className="w-full"
            >
              {allAnswered ? 'Submit Assessment' : `Answer All Questions (${QUESTIONS.filter(q => answers[q.id] !== null).length}/${QUESTIONS.length})`}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card className="border-primary/50 bg-primary/5 backdrop-blur-sm">
        <CardContent className="pt-6">
          <div className="text-center space-y-3">
            <h3 className="text-xl font-semibold">Need Expert Guidance?</h3>
            <p className="text-muted-foreground">
              Get personalized financial advice to improve your financial health
            </p>
            <Button onClick={onNavigateToContact} variant="outline" size="lg">
              Contact Our Advisor
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
